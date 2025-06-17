
import React from 'react';


// github,instagram,linkdin ye sab page ko dikhane ke liye react-router ka use na kare. 

const Contributors = () => {
    const contributors = [
        {
            name: "Sumit Kumar",
            role: "Lead Developer",
            image: "",
            description: "Full-stack developer responsible for building and maintaining the entire platform.",
            social: {
                linkedin: "https://www.linkedin.com/in/sumit-kumar-5919982a7/",
                github: "https://github.com/sumitkumar2299",
                instagram: "www.linkedin.com/in/sumit-kumar-5919982a7"
            },
            achievements: [
                "5+ Project done",
                "Open Source contributor",
                "Delivered 3 project as a freelancer"
            ],
            expertise: ["Web development", "Data science","Devops"]
        },
        {
            name: "Krishna Kumar",
            role: "Design & Documentation Lead and security expert",
            image: "",
            description: "Expert in UI/UX design and technical documentation. Creates beautiful and intuitive interfaces for our platform.",
            social: {
                linkedin: "https://linkedin.com/in/krishna-sharma",
                github: "https://github.com/krishna-sharma",
                instagram: "https://instagram.com/krishna.sharma"
            },
            achievements: [
                "Adobe Certified Expert",
                "UI/UX Design Award 2023",
                "Technical Writing Certification"
            ],
            expertise: ["UI/UX Design", "Technical Writing", "Documentation", "Visual Design"]
        },
        {
            name: "Amrit Raj",
            role: "Content Lead(University Exam)- CSE Department",
            image: "",
            description: "",
            social: {
                linkedin: "https://linkedin.com/in/gaurav-patel",
                github: "https://github.com/gaurav-patel",
                instagram: "https://instagram.com/gaurav.patel"
            },
            achievements: [
                "GATE AIR 15",
                "Published Author - GATE Preparation Books",
                "10+ Years Teaching Experience"
            ],
            expertise: ["GATE Preparation", "Computer Science", "Teaching", "Content Creation"]
        },
        {
            name: "Kumar Gaurav",
            role: "Content Lead(GATE Exam) - CSE Department",
            image: "",
            description: "",
            social: {
                linkedin: "https://linkedin.com/in/rahul-verma",
                github: "https://github.com/rahul-verma",
                twitter: "https://twitter.com/rahul_verma"
            },
            achievements: [
                "Senior Software Engineer at Tech Giants",
                "Open Source Contributor",
                "Technical Speaker at Major Conferences"
            ],
            expertise: ["React", "Node.js", "System Architecture", "Cloud Computing"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-20 sm:py-24 lg:py-28">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                                <span className="text-sm font-medium text-white">Our Team</span>
                            </div>
                            
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
                                Meet Our Experts
                            </h1>
                            
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                A dedicated team of professionals committed to creating an exceptional learning platform
                            </p>

                            {/* Decorative Line */}
                            <div className="mt-8 flex justify-center">
                                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verification Notice */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-primary/20">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-900">Quality Assurance</h2>
                    </div>
                    <div className="text-center">
                        <p className="text-lg text-gray-600 mb-4">
                            All study materials, including notes, previous year questions, and other content are thoroughly verified by our faculty members before being uploaded to ensure accuracy and quality.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Faculty-Verified Content</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contributors Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-16">
                    {contributors.map((contributor, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col ${
                                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-8 lg:gap-16`}
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/3">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
                                    <img 
                                        src={contributor.image} 
                                        alt={contributor.name}
                                        className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-2/3">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">{contributor.name}</h2>
                                        <p className="mt-2 text-xl text-primary font-semibold">{contributor.role}</p>
                                    </div>

                                    <p className="text-lg text-gray-600">{contributor.description}</p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {contributor.expertise.map((skill, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Achievements */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
                                        <ul className="space-y-2">
                                            {contributor.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="text-gray-600">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex space-x-4 pt-4">
                                        {contributor.social.linkedin && (
                                            <a 
                                                href={contributor.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                        )}
                                        {contributor.social.github && (
                                            <a 
                                                href={contributor.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                        )}
                                        {contributor.social.instagram && (
                                            <a 
                                                href={contributor.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                </svg>
                                            </a>
                                        )}
                                        {contributor.social.twitter && (
                                            <a 
                                                href={contributor.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Us Section */}
                <div className="mt-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="px-6 py-12 sm:px-12 lg:px-16">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                    Want to Contribute?
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Join our team and help create quality study materials for everyone.
                                </p>
                                <div className="mt-8">
                                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
                                        Join Our Team
                                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributors;