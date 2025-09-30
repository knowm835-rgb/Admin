
import React, { useState } from 'react';
import { useAuth } from '../contexts/AppContext';
import { I18N_TEXT } from '../constants';

const Header: React.FC = () => {
    const { logout, language, toggleLanguage } = useAuth();
    const [profileOpen, setProfileOpen] = useState(false);
    const text = I18N_TEXT[language];

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <div className="text-3xl">🚛</div>
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 ml-3">{text.appTitle}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
        >
          <span className="font-bold">{language === 'en' ? 'BN' : 'EN'}</span>
        </button>
        <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a2 2 0 10-4 0v.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="block w-10 h-10 overflow-hidden rounded-full shadow-lg focus:outline-none">
            <img className="object-cover w-full h-full" src="https://picsum.photos/seed/admin/200" alt="Admin Avatar" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 w-48 mt-2 py-2 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-truckbhai-primary hover:text-white">Profile</a>
              <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-truckbhai-primary hover:text-white">
                {text.logout}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
