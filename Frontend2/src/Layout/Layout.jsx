

import React, { useEffect, useState } from 'react';
import './Layout.css'// hum thodi manual CSS bhi likhenge

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark-toggle-bg backdrop-blur-lg shadow border border-gray-300 dark-toggle-border hover:bg-gray-100 dark-toggle-hover transition-colors"
    >
      <svg
        className="w-6 h-6 text-gray-600 dark-toggle-text"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Light mode icon */}
        <path
          className={darkMode ? 'hidden' : ''}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
        {/* Dark mode icon */}
        <path
          className={darkMode ? '' : 'hidden'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </button>
  );
};

export default DarkModeToggle;
