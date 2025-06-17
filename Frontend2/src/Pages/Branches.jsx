

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Branches = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const branches = [
        {
            id: 1,
            name: 'CSE (IoT)',
            Documents: 120,
            description: 'Computer Science with Internet of Things specialization',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            color: 'blue'
        },
        {
            id: 2,
            name: 'Mechanical',
            Documents: 70,
            description: 'Mechanical Engineering with modern manufacturing focus',
            image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            color: 'green'
        },
        {
            id: 3,
            name: 'Civil',
            Documents: 60,
            description: 'Civil Engineering with sustainable infrastructure focus',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            color: 'purple'
        },
        {
            id: 4,
            name: 'ECE',
            Documents: 75,
            description: 'Electronics and Communication Engineering',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            color: 'yellow'
        },
        {
            id: 5,
            name: 'EE',
            Documents: 60,
            description: 'Electrical Engineering with power systems focus',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
            color: 'red'
        }
    ];

    // Filter and sort branches based on search query
    const filteredBranches = branches
        .filter(branch => 
            branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            branch.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            // If search query matches the name exactly, prioritize it
            const aExactMatch = a.name.toLowerCase() === searchQuery.toLowerCase();
            const bExactMatch = b.name.toLowerCase() === searchQuery.toLowerCase();
            
            if (aExactMatch && !bExactMatch) return -1;
            if (!aExactMatch && bExactMatch) return 1;
            
            // If search query is at the start of the name, prioritize it
            const aStartsWith = a.name.toLowerCase().startsWith(searchQuery.toLowerCase());
            const bStartsWith = b.name.toLowerCase().startsWith(searchQuery.toLowerCase());
            
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            
            return 0;
        });

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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                    {filteredBranches.map((branch) => (
                        <div key={branch.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                            <div className="h-48 card-image" style={{ backgroundImage: `url(${branch.image})` }}></div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{branch.name}</h3>
                                    <span className={`px-3 py-1 text-sm font-semibold text-${branch.color}-600 bg-${branch.color}-100 rounded-full`}>
                                        {branch.Documents} Documents
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{branch.description}</p>
                                <Link to={`/branch/${branch.name.toLowerCase().split(' ')[0]}`}>
                                    <button className="cursor-pointer w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                        Explore
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredBranches.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No branches found matching your search.</p>
                    </div>
                )}
            </div>

            {/* Donate Button */}
            <button 
                onClick={() => setIsDonateModalOpen(true)}
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span className="hidden sm:inline">Donate</span>
            </button>

            {/* Donate Modal */}
            {isDonateModalOpen && (
                <div className="donate-modal active">
                    <div className="container mx-auto px-4 py-8">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto p-8">
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
                </div>
            )}
        </div>
    );
};

export default Branches;
