import React, { useState } from 'react';

const SubjectOverview = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

    const subjects = [
        {
            id: 1,
            name: "Engineering Mathematics",
            type: "Core",
            description: "Advanced calculus, linear algebra, and differential equations",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            color: "blue"
        },
        {
            id: 2,
            name: "Programming Fundamentals",
            type: "Core",
            description: "C/C++, data structures, and algorithms",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            color: "green"
        },
        {
            id: 3,
            name: "Object-Oriented Programming",
            type: "Core",
            description: "Java, design patterns, and software architecture",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            color: "purple"
        },
        {
            id: 4,
            name: "Database Management",
            type: "Core",
            description: "SQL, NoSQL, and database design principles",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            color: "yellow"
        },
        {
            id: 5,
            name: "Web Development",
            type: "Core",
            description: "HTML, CSS, JavaScript, and modern frameworks",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
            color: "red"
        },
        {
            id: 6,
            name: "Operating Systems",
            type: "Core",
            description: "Process management, memory management, and file systems",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            color: "indigo"
        }
    ];

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
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Subject Overview</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our comprehensive engineering subjects</p>
                </div>

                {/* Top Ad Space */}
                <div className="mb-12">
                    <div className="ad-container">
                        Advertisement Space
                    </div>
                </div>

                {/* Subject Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subjects.map((subject) => (
                        <div key={subject.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                            <div className="h-48 card-image" style={{ backgroundImage: `url(${subject.image})` }}></div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{subject.name}</h3>
                                    <span className={`px-3 py-1 text-sm font-semibold text-${subject.color}-600 bg-${subject.color}-100 rounded-full`}>
                                        {subject.type}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">{subject.description}</p>
                                <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    View Details
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Bottom Ad Space */}
                    <div className="col-span-full mt-8">
                        <div className="ad-container">
                            Advertisement Space
                        </div>
                    </div>
                </div>
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

export default SubjectOverview;