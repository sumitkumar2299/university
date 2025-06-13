
import React, { useState } from 'react';

const AcademicResourcesHub = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
    const [isPYQExpanded, setIsPYQExpanded] = useState(false);
    const [isGATEPYQExpanded, setIsGATEPYQExpanded] = useState(false);

    const handleDownload = (title) => {
        const button = document.querySelector(`[data-title="${title}"]`);
        const originalContent = button.innerHTML;
        
        // Show loading state
        button.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Processing...</span>
        `;
        button.classList.add('opacity-75', 'cursor-not-allowed');

        // Simulate download delay
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.classList.remove('opacity-75', 'cursor-not-allowed');

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-0 opacity-100';
            successMessage.innerHTML = `
                <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>${title} downloaded successfully!</span>
                </div>
            `;
            document.body.appendChild(successMessage);

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.add('translate-y-2', 'opacity-0');
                setTimeout(() => {
                    successMessage.remove();
                }, 300);
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary p-4 rounded-2xl shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Academic Resources Hub</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Access comprehensive study materials and resources</p>
                </div>

                {/* Top Ad Space */}
                <div className="mb-12">
                    <div className="ad-container">
                        Advertisement Space
                    </div>
                </div>

                {/* Resource Lists */}
                <div className="space-y-8">
                    {/* Handbook List */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Handbook 2024</h3>
                                    <p className="text-gray-600">Comprehensive subject guides and reference materials</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 gap-4">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <span className="text-gray-900 font-medium text-lg">Handbook 2024</span>
                                    <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full w-fit">Latest</span>
                                </div>
                                <button 
                                    onClick={() => handleDownload('Handbook 2024')}
                                    data-title="Handbook 2024"
                                    className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Previous Year Questions List */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div 
                            className="flex items-center justify-between mb-6 cursor-pointer"
                            onClick={() => setIsPYQExpanded(!isPYQExpanded)}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Previous Year Questions</h3>
                                    <p className="text-gray-600">Past examination papers with solutions</p>
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
                                <div key={year} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 gap-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="text-gray-900 font-medium text-lg">PYQ {year}</span>
                                        {year === '2024' && (
                                            <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full w-fit">Latest</span>
                                        )}
                                    </div>
                                    <button 
                                        onClick={() => handleDownload(`PYQ ${year}`)}
                                        data-title={`PYQ ${year}`}
                                        className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                                    >
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
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div 
                            className="flex items-center justify-between mb-6 cursor-pointer"
                            onClick={() => setIsGATEPYQExpanded(!isGATEPYQExpanded)}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">GATE PYQ</h3>
                                    <p className="text-gray-600">GATE previous year question papers</p>
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
                                <div key={year} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 gap-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="text-gray-900 font-medium text-lg">GATE PYQ {year}</span>
                                        {year === '2024' && (
                                            <span className="px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full w-fit">Latest</span>
                                        )}
                                    </div>
                                    <button 
                                        onClick={() => handleDownload(`GATE PYQ ${year}`)}
                                        data-title={`GATE PYQ ${year}`}
                                        className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                                    >
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
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Handwritten Notes</h3>
                                <p className="text-gray-600">Detailed handwritten notes for better understanding</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 gap-4">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <div className="flex flex-col">
                                    <span className="text-gray-900 font-medium text-lg">Data Structures & Algorithms</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                            <span>By: Rahul Sharma (CSE 3rd Year)</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span>Last Updated: March 15, 2024</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            <span>Pages: 156</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full w-fit">Latest</span>
                            </div>
                            <button 
                                onClick={() => handleDownload('DSA Handwritten Notes')}
                                data-title="DSA Handwritten Notes"
                                className="cursor-pointer download-btn bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                            >
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
            <button 
                onClick={() => setIsDonateModalOpen(true)}
                className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </button>

            {/* Donate Modal */}
            {isDonateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Support Our Cause</h2>
                                    <p className="text-gray-600">Help us make education accessible to all</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsDonateModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=your-upi-id" alt="UPI QR Code" className="w-48 h-48" />
                                    <p className="text-center mt-2 text-sm text-gray-600">Scan to donate</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <input type="text" placeholder="Your Name" className="flex-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="email" placeholder="Your Email" className="flex-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input type="tel" placeholder="Your Phone" className="flex-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                                    </svg>
                                    <span>Get Shout Out</span>
                                </button>
                            </div>

                            <p className="text-center text-sm text-gray-500">
                                Your donation will help us provide better education and resources to students
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AcademicResourcesHub;