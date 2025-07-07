
import React from 'react';
import { Link } from 'react-router-dom';

const Branches = () => {
    return (
        <div className="bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary p-4 rounded-2xl shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Engineering Branches</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Explore our diverse range of engineering programs</p>
                    
                    {/* Search Input */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search branches..."
                                className="w-full p-4 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engineering Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* CSE Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}></div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">CSE (IoT)</h3>
                                <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                                    120 Documents
                                </span>
                            </div>
                            <p className="text-gray-600 mb-6">Computer Science with Internet of Things specialization</p>
                            <Link to="/branch/cse">
                                <button className="cursor-pointer w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Explore
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mechanical Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092921461-eab62e97a2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}></div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Mechanical</h3>
                                <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
                                    70 Documents
                                </span>
                            </div>
                            <p className="text-gray-600 mb-6">Mechanical Engineering with modern manufacturing focus</p>
                            <Link to="/branch/mechanical">
                                <button className="cursor-pointer w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Explore
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Civil Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}></div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">Civil</h3>
                                <span className="px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
                                    60 Documents
                                </span>
                            </div>
                            <p className="text-gray-600 mb-6">Civil Engineering with sustainable infrastructure focus</p>
                            <Link to="/branch/civil">
                                <button className="cursor-pointer w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Explore
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* ECE Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)' }}></div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">ECE</h3>
                                <span className="px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100 rounded-full">
                                    75 Documents
                                </span>
                            </div>
                            <p className="text-gray-600 mb-6">Electronics and Communication Engineering</p>
                            <Link to="/branch/ece">
                                <button className="cursor-pointer w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Explore
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* EE Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80)' }}></div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">EE</h3>
                                <span className="px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
                                    60 Documents
                                </span>
                            </div>
                            <p className="text-gray-600 mb-6">Electrical Engineering with power systems focus</p>
                            <Link to="/branch/ee">
                                <button className="cursor-pointer w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Explore
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branches;
