import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Configure axios defaults for authentication
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return () => {
      delete axios.defaults.headers.common['Authorization'];
    };
  }, []);

  // Set up axios interceptor for token handling
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 && localStorage.getItem('authToken')) {
          localStorage.removeItem('authToken');
          delete axios.defaults.headers.common['Authorization'];
          setUser(null);
          setAuthError('Session expired. Please login again.');
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${config.apiUrl}/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.data.user) {
        setUser(response.data.user);
        // Update token if a new one is provided
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        }
      } else {
        handleLogout();
      }
    } catch (error) {
      console.error('Auth verification failed:', error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Listen for storage events (logout in other tabs)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'authToken') {
        if (!e.newValue) {
          setUser(null);
          delete axios.defaults.headers.common['Authorization'];
        } else {
          checkAuthStatus();
        }
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`,
        { email, password }
      );
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        setAuthError(null);
        return { success: true };
      }
      return { success: false, message: 'Login success' };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      setAuthError(message);
      return { success: false, message };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    setAuthError(null);
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        await axios.post(`${config.apiUrl}/auth/logout`);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      handleLogout();
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(`${config.apiUrl}/auth/signup`,
        { name, email, password }
      );
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        setAuthError(null);
        return { success: true };
      }
      return { success: false, message: 'Signup failed' };
    } catch (error) {
      const message = error.response?.data?.message || 'Signup failed';
      setAuthError(message);
      return { success: false, message };
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      loading,
      authError,
      login,
      logout,
      signup,
      checkAuthStatus,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};