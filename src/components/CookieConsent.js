import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { 
      expires: 365, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    setShowConsent(false);
  };

  const handleRejectCookies = () => {
    Cookies.set('cookieConsent', 'rejected', { 
      expires: 365, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-700 shadow-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Cookie className="text-white w-12 h-12" />
          <div>
            <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
            <p className="text-blue-100 text-sm">
              We use cookies to enhance your browsing experience and analyze site traffic.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleRejectCookies} 
            className="px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors"
          >
            Reject
          </button>
          <button 
            onClick={handleAcceptCookies} 
            className="px-4 py-2 bg-white text-blue-700 rounded-md hover:bg-blue-100 transition-colors font-semibold"
          >
            Accept Cookies
          </button>
          <button 
            onClick={() => setShowConsent(false)} 
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;