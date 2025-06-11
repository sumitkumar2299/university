import React, { useState, useEffect } from 'react';

// You would typically import Tailwind CSS via npm in your main App.js or index.js
// For this single component, we'll assume the Tailwind CDN is in your public/index.html
// or you've configured Tailwind correctly in your React project.

const LandingPresentation = () => {
    // State for dark mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize dark mode from localStorage or system preference
        if (typeof window !== 'undefined') { // Check if window is defined (for SSR compatibility)
            return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false; // Default to light mode if window is not available
    });

    // State for mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State for login modal visibility
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    // State for developer credentials modal visibility
    const [isDevModalOpen, setIsDevModalOpen] = useState(false);

    // Effect to apply dark mode class to HTML element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDarkMode]);

    // Handle dark mode toggle
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Handle mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    // Show login modal
    const showLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    // Hide login modal
    const hideLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    // Handle login form submission
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert('Login functionality is not implemented yet!');
        hideLoginModal();
    };

    // Show developer modal
    const showDevModal = () => {
        setIsDevModalOpen(true);
    };

    // Hide developer modal
    const hideDevModal = () => {
        setIsDevModalOpen(false);
    };

    return (
        <div className="bg-white dark:bg-dark-bg transition-colors duration-300 font-sans">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#" className="text-xl font-bold gradient-text">Academic Hub</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button id="mobileMenuButton" className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400" onClick={toggleMobileMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {/* Navigation Links (Desktop) */}
                        <div id="navLinks" className="hidden md:flex items-center justify-center space-x-6">
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">About Us</a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">Contributors</a>
                            <button onClick={showLoginModal} className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 font-medium">
                                <span>Admin Login</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div id="mobileMenu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden py-4 space-y-4`}>
                        <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">About Us</a>
                        <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">Contributors</a>
                        <button onClick={showLoginModal} className="w-full bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2 font-medium">
                            <span>Admin Login</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Theme Controls */}
            <div className="fixed top-20 right-6 z-50">
                <button id="darkModeToggle" className="bg-white dark:bg-dark-card text-gray-800 dark:text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group" onClick={toggleDarkMode}>
                    <div className="relative">
                        <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path className={`${isDarkMode ? 'hidden' : 'dark:hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            <path className={`${isDarkMode ? 'block' : 'hidden'} dark:block`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        <span className="absolute -top-8 right-0 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            Toggle Theme
                        </span>
                    </div>
                </button>
            </div>

            {/* Hero Section */}
            <div className="min-h-screen flex flex-col relative">
                <div className="gradient-bg text-gray-900 dark:text-white py-32 md:py-20 relative overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <svg className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                <path d="M0,50 L100,50" stroke="currentColor" strokeWidth="0.5"/>
                                <path d="M50,0 L50,100" stroke="currentColor" strokeWidth="0.5"/>
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Logo Animation */}
                            <div className="mb-8 flex justify-center">
                                <div className="w-24 h-24 bg-white dark:bg-dark-card rounded-2xl shadow-2xl flex items-center justify-center floating">
                                    <svg className="w-16 h-16 text-primary dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                            </div>

                            <h1 className="text-5xl font-bold mb-6 gradient-text">Welcome to Academic Resources Hub</h1>
                            <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">Access comprehensive study materials, previous year questions, and handwritten notes all in one place.</p>

                            {/* Enhanced CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="index3.html" className="group bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                    <span>Get Started</span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Wave Divider */}
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-20 bg-gray-50 dark:bg-dark-bg">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Study Materials Card */}
                            <div className="feature-card p-8 rounded-xl shadow-lg card-hover group glass-effect">
                                <div className="feature-icon w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Study Materials</h3>
                                <p className="text-gray-600 dark:text-gray-300">Access comprehensive study materials and reference guides for your courses.</p>
                            </div>

                            {/* Previous Year Questions Card */}
                            <div className="feature-card p-8 rounded-xl shadow-lg card-hover group glass-effect">
                                <div className="feature-icon w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Previous Year Questions</h3>
                                <p className="text-gray-600 dark:text-gray-300">Practice with past examination papers and improve your preparation.</p>
                            </div>

                            {/* Handwritten Notes Card */}
                            <div className="feature-card p-8 rounded-xl shadow-lg card-hover group glass-effect">
                                <div className="feature-icon w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Handwritten Notes</h3>
                                <p className="text-gray-600 dark:text-gray-300">Access detailed handwritten notes shared by top performers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div id="loginModal" className="login-modal active" onClick={(e) => e.target.id === 'loginModal' && hideLoginModal()}>
                    <div className="container mx-auto px-4 flex items-center justify-center">
                        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl max-w-md w-full p-8 transform scale-100 opacity-100 transition-all duration-300" id="modalContent">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h2>
                                    <p className="text-gray-600 dark:text-gray-300">Access the admin dashboard</p>
                                </div>
                                <button onClick={hideLoginModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                            </svg>
                                        </div>
                                        <input type="email" required className="w-full pl-10 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-hover text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                            </svg>
                                        </div>
                                        <input type="password" required className="w-full pl-10 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-hover text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your password" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                                    <span>Login</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                    </svg>
                                </button>
                            </form>

                            <div className="mt-6 text-center space-y-3">
                                <a href="#" className="text-sm text-primary hover:text-secondary dark:text-blue-400 dark:hover:text-blue-300 flex items-center justify-center space-x-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                    </svg>
                                    <span>Forgot password?</span>
                                </a>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Don't have an account?
                                    <a href="#" className="text-primary hover:text-secondary dark:text-blue-400 dark:hover:text-blue-300 font-medium">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Developer Credentials Button */}
            <button id="devButton" className="fixed bottom-6 right-6 bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2" onClick={showDevModal}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <span className="hidden sm:inline">Developer Info</span>
            </button>

            {/* Developer Credentials Modal */}
            {isDevModalOpen && (
                <div id="devCredentials" className="dev-credentials active" onClick={(e) => e.target.id === 'devCredentials' && hideDevModal()}>
                    <div className="container mx-auto px-4 py-8 w-full max-w-2xl">
                        {/* The transform animation was applied directly via JS previously.
                            In React, you'd typically control this with state-driven classes
                            or a dedicated animation library. For simplicity, the initial
                            render will just show it, but if you want the slide-up, you'd need
                            a slight delay with an additional state or a CSS transition group.
                            Here, I'm using the `active` class to trigger the `transform` from CSS.
                        */}
                        <div className="bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl p-8 transform translateY(0) transition-transform duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                        SK
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sumit Kumar</h2>
                                        <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                                    </div>
                                </div>
                                <button onClick={hideDevModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span>Location: New Delhi, India</span>
                                    </div>
                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <span>Projects: 20+ Completed</span>
                                    </div>
                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                        <span>Education: B.Tech CSE</span>
                                    </div>
                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                        </svg>
                                        <span>Skills: Full Stack Development, UI/UX Design</span>
                                    </div>
                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Experience: 3+ Years</span>
                                    </div>
                                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>Email: contact@sumitkumar.dev</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Passionate about creating beautiful and functional web applications. Always eager to learn new technologies and solve complex problems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
export default LandingPresentation;