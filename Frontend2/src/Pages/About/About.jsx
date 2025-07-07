
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-24 sm:py-32 lg:py-40">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-lg mb-8">
                                <span className="text-sm font-medium text-primary">Student Initiative</span>
                                <div className="w-1 h-1 rounded-full bg-gray-300 mx-2"></div>
                                <span className="text-sm font-medium text-gray-600">2025</span>
                            </div>
                            
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
                                Student-Led
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
                                    Learning Community
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                A collaborative platform where students share knowledge, create interactive study materials, and support each other's academic journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Feature Card 1 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Student Contributors</h3>
                                <p className="text-gray-600">Students who excel in their subjects create and share their notes</p>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive PDFs</h3>
                                <p className="text-gray-600">Creating engaging and interactive study materials</p>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">GATE Preparation</h3>
                                <p className="text-gray-600">Specialized content for GATE aspirants</p>
                            </div>
                        </div>

                        {/* Feature Card 4 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Faculty Verification</h3>
                                <p className="text-gray-600">All content is reviewed and verified by faculty members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="relative py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">Our Mission</span>
                        </div>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Empowering Students Through Collaborative Learning
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We believe in the power of peer learning and knowledge sharing. Our platform brings together talented students, 
                            creating a vibrant ecosystem where everyone can contribute and learn from each other.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative py-16 sm:py-24">
                <Link to="/about/contactus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
                        </div>
                        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                            <div className="px-6 py-12 sm:px-12 lg:px-16">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl">
                                        Get in Touch
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Have questions or want to collaborate? Reach out to us!
                                    </p>
                                    <div className="mt-8">
                                        <button className=" cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Join Us Section */}
            <div className="relative py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
                        </div>
                        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                            <div className="px-6 py-12 sm:px-12 lg:px-16">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                        Join Our Learning Community
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Be part of a community that values knowledge sharing and collaborative learning.
                                    </p>
                                    <div className="mt-8">
                                        <Link to="/admin">
                                            <button className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
                                                Get Started
                                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
