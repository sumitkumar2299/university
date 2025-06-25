
import React, { useState } from 'react';

const AcademicResourcesHub = () => {
    const [isPYQExpanded, setIsPYQExpanded] = useState(false);
    const [isGATEPYQExpanded, setIsGATEPYQExpanded] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 hover:text-primary transition-colors duration-300">Academic Resources Hub</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-900 transition-colors duration-300">Access comprehensive study materials and resources</p>
                </div>

                {/* Top Ad Space */}
                <div className="mb-12">
                    <div className="ad-container hover:shadow-lg transition-shadow duration-300">
                        Advertisement Space
                    </div>
                </div>

                {/* Resource Lists */}
                <div className="space-y-8">
                    {/* Handbook List */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">Handbook 2024</h3>
                                    <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Comprehensive subject guides and reference materials</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 gap-4 transform hover:scale-[1.02]">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <span className="text-gray-900 font-medium text-lg hover:text-blue-600 transition-colors duration-300">Handbook 2024</span>
                                    <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full w-fit hover:bg-blue-200 transition-colors duration-300">Latest</span>
                                </div>
                                <button className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Previous Year Questions List */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                        <div 
                            className="flex items-center justify-between mb-6 cursor-pointer"
                            onClick={() => setIsPYQExpanded(!isPYQExpanded)}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-300">Previous Year Questions</h3>
                                    <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Past examination papers with solutions</p>
                                </div>
                            </div>
                            <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <svg 
                                    className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isPYQExpanded ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`space-y-4 transition-all duration-300 ${isPYQExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {['2024', '2023', '2022'].map((year) => (
                                <div key={year} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 gap-4 transform hover:scale-[1.02]">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="text-gray-900 font-medium text-lg hover:text-green-600 transition-colors duration-300">PYQ {year}</span>
                                        {year === '2024' && (
                                            <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full w-fit hover:bg-green-200 transition-colors duration-300">Latest</span>
                                        )}
                                    </div>
                                    <button className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        <span>Download</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GATE PYQ List */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                        <div 
                            className="flex items-center justify-between mb-6 cursor-pointer"
                            onClick={() => setIsGATEPYQExpanded(!isGATEPYQExpanded)}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors duration-300">GATE PYQ</h3>
                                    <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">GATE previous year question papers</p>
                                </div>
                            </div>
                            <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <svg 
                                    className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isGATEPYQExpanded ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`space-y-4 transition-all duration-300 ${isGATEPYQExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {['2024', '2023', '2022'].map((year) => (
                                <div key={year} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 gap-4 transform hover:scale-[1.02]">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="text-gray-900 font-medium text-lg hover:text-red-600 transition-colors duration-300">GATE PYQ {year}</span>
                                        {year === '2024' && (
                                            <span className="px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full w-fit hover:bg-red-200 transition-colors duration-300">Latest</span>
                                        )}
                                    </div>
                                    <button className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        <span>Download</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Handwritten Notes Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors duration-300">Handwritten Notes</h3>
                                <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Detailed handwritten notes for better understanding</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 gap-4 transform hover:scale-[1.02]">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <div className="flex flex-col">
                                    <span className="text-gray-900 font-medium text-lg hover:text-purple-600 transition-colors duration-300">Data Structures & Algorithms</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                            <span>By: Rahul Sharma (CSE 3rd Year)</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Last Updated: March 15, 2024</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            <span>Pages: 156</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full w-fit hover:bg-purple-200 transition-colors duration-300">Latest</span>
                            </div>
                            <button className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donate Button */}
            <button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </button>
        </div>
    );
};

export default AcademicResourcesHub;