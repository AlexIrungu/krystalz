// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import config from '../config';

const AuthContext = createContext(null);
const TOKEN_REFRESH_INTERVAL = 1000 * 60 * 15; // 15 minutes

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [tokenRefreshTimeout, setTokenRefreshTimeout] = useState(null);

   // Cookie configuration
   const cookieOptions = {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: 7 // 7 days
  };

  // Initialize auth state from cookies
  useEffect(() => {
    const initializeAuth = async () => {
      const token = Cookies.get('authToken');
      const storedUser = Cookies.get('userData');
      
      if (storedUser && token) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          await checkAuthStatus();
        } catch (error) {
          handleLogout();
        }
      } else {
        setLoading(false);
      }
    };

    initializeAuth();
    return () => {
      if (tokenRefreshTimeout) {
        clearTimeout(tokenRefreshTimeout);
      }
    };
  }, []);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('authToken');
      
      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await checkAuthStatus();
      } else {
        setLoading(false);
      }
    };

    initializeAuth();
    return () => {
      if (tokenRefreshTimeout) {
        clearTimeout(tokenRefreshTimeout);
      }
    };
  }, []);

  // Set up periodic token refresh
  useEffect(() => {
    if (user) {
      const timeout = setTimeout(refreshToken, TOKEN_REFRESH_INTERVAL);
      setTokenRefreshTimeout(timeout);
      return () => clearTimeout(timeout);
    }
  }, [user]);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/auth/verify`);
      if (response.data.token) {
        updateAuthState(response.data.user, response.data.token);
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      handleLogout();
    }
  };

  const updateAuthState = (userData, token) => {
    Cookies.set('userData', JSON.stringify(userData), cookieOptions);
    Cookies.set('authToken', token, cookieOptions);
    Cookies.set('lastActivity', Date.now().toString(), cookieOptions);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(userData);
  };

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/auth/verify`);
      if (response.data.user) {
        updateAuthState(response.data.user, response.data.token);
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

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`, { email, password });
      if (response.data.token) {
        updateAuthState(response.data.user, response.data.token);
        setAuthError(null);
        return { success: true };
      }
      return { success: false, message: 'Login failed' };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      setAuthError(message);
      return { success: false, message };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(`${config.apiUrl}/auth/signup`, { name, email, password });
      if (response.data.token) {
        updateAuthState(response.data.user, response.data.token);
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

  const handleLogout = () => {
    Cookies.remove('userData');
    Cookies.remove('authToken');
    Cookies.remove('lastActivity');
    delete axios.defaults.headers.common['Authorization'];
    if (tokenRefreshTimeout) {
      clearTimeout(tokenRefreshTimeout);
    }
    setUser(null);
    setAuthError(null);
  };

  // Activity monitoring
  useEffect(() => {
    const activityTimeout = 1000 * 60 * 30; // 30 minutes

    const checkActivity = () => {
      const lastActivity = Cookies.get('lastActivity');
      if (lastActivity && Date.now() - parseInt(lastActivity) > activityTimeout) {
        handleLogout();
      }
    };

    const activityInterval = setInterval(checkActivity, 1000 * 60); // Check every minute
    const updateActivity = () => {
      if (user) {
        Cookies.set('lastActivity', Date.now().toString(), cookieOptions);
      }
    };

    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keypress', updateActivity);

    return () => {
      clearInterval(activityInterval);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keypress', updateActivity);
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      authError,
      login,
      logout: handleLogout,
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