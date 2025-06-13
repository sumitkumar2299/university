// import React from 'react';

// const Contributors = () => {
//     const contributors = [
//         {
//             name: "Amrit Kumar",
//             role: "Content Lead - CSE Department",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
//             social: {
//                 linkedin: "https://linkedin.com/in/amrit-kumar",
//                 github: "https://github.com/amrit-kumar",
//                 instagram: "https://instagram.com/amrit.kumar"
//             },
//             achievements: [
//                 "Top 100 in CodeChef",
//                 "Google Summer of Code 2023",
//                 "Microsoft Learn Student Ambassador"
//             ]
//         },
//         {
//             name: "Krishna Sharma",
//             role: "Design & Documentation Lead",
//             image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
//             description: "Expert in UI/UX design and technical documentation. Creates beautiful and intuitive interfaces for our platform.",
//             social: {
//                 linkedin: "https://linkedin.com/in/krishna-sharma",
//                 github: "https://github.com/krishna-sharma",
//                 instagram: "https://instagram.com/krishna.sharma"
//             },
//             achievements: [
//                 "Adobe Certified Expert",
//                 "UI/UX Design Award 2023",
//                 "Technical Writing Certification"
//             ]
//         },
//         {
//             name: "Gaurav Patel",
//             role: "GATE Content Specialist",
//             image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Specializes in GATE preparation content. Creates comprehensive study materials and practice questions.",
//             social: {
//                 linkedin: "https://linkedin.com/in/gaurav-patel",
//                 github: "https://github.com/gaurav-patel",
//                 instagram: "https://instagram.com/gaurav.patel"
//             },
//             achievements: [
//                 "GATE AIR 15",
//                 "Published Author - GATE Preparation Books",
//                 "10+ Years Teaching Experience"
//             ]
//         },
//         {
//             name: "Priya Singh",
//             role: "Community Manager",
//             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Manages community engagement and student support. Organizes workshops and study groups.",
//             social: {
//                 linkedin: "https://linkedin.com/in/priya-singh",
//                 github: "https://github.com/priya-singh",
//                 instagram: "https://instagram.com/priya.singh"
//             },
//             achievements: [
//                 "Community Leadership Award",
//                 "1000+ Students Mentored",
//                 "Event Management Expert"
//             ]
//         },
//         {
//             name: "Rahul Verma",
//             role: "Technical Content Writer",
//             image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Creates detailed technical content and tutorials. Specializes in programming languages and web development.",
//             social: {
//                 linkedin: "https://linkedin.com/in/rahul-verma",
//                 github: "https://github.com/rahul-verma",
//                 instagram: "https://instagram.com/rahul.verma"
//             },
//             achievements: [
//                 "Technical Blog Award 2023",
//                 "Published 100+ Articles",
//                 "Full Stack Developer"
//             ]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Contributors</h1>
//                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                         Meet the talented individuals who make this platform possible through their dedication and expertise.
//                     </p>
//                 </div>

//                 {/* Contributors Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {contributors.map((contributor, index) => (
//                         <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
//                             {/* Image Section */}
//                             <div className="relative h-48">
//                                 <img 
//                                     src={contributor.image} 
//                                     alt={contributor.name}
//                                     className="w-full h-full object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                                 <div className="absolute bottom-4 left-4">
//                                     <h3 className="text-2xl font-bold text-white">{contributor.name}</h3>
//                                     <p className="text-white/90">{contributor.role}</p>
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="p-6">
//                                 <p className="text-gray-600 mb-4">{contributor.description}</p>

//                                 {/* Achievements */}
//                                 <div className="mb-6">
//                                     <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
//                                     <ul className="space-y-2">
//                                         {contributor.achievements.map((achievement, idx) => (
//                                             <li key={idx} className="flex items-center text-sm text-gray-600">
//                                                 <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                                                 </svg>
//                                                 {achievement}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 {/* Social Links */}
//                                 <div className="flex space-x-4">
//                                     <a 
//                                         href={contributor.social.linkedin}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                                     >
//                                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                                         </svg>
//                                     </a>
//                                     <a 
//                                         href={contributor.social.github}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
//                                     >
//                                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                         </svg>
//                                     </a>
//                                     <a 
//                                         href={contributor.social.instagram}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
//                                     >
//                                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Join Us Section */}
//                 <div className="mt-16 text-center">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h2>
//                     <p className="text-xl text-gray-600 mb-8">
//                         We're always looking for passionate individuals to join our mission of making education accessible to all.
//                     </p>
//                     <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
//                         Become a Contributor
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contributors;






// import React from 'react';

// const Contributors = () => {
//     const contributors = [
//         {
//             name: "Amrit Kumar",
//             role: "Content Lead - CSE Department",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
//             social: {
//                 linkedin: "https://linkedin.com/in/amrit-kumar",
//                 github: "https://github.com/amrit-kumar",
//                 instagram: "https://instagram.com/amrit.kumar"
//             },
//             achievements: [
//                 "Top 100 in CodeChef",
//                 "Google Summer of Code 2023",
//                 "Microsoft Learn Student Ambassador"
//             ],
//             expertise: ["DSA", "Algorithms", "System Design", "Competitive Programming"]
//         },
//          {
//             name: "Amrit Kumar",
//             role: "Content Lead - CSE Department",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
//             social: {
//                 linkedin: "https://linkedin.com/in/amrit-kumar",
//                 github: "https://github.com/amrit-kumar",
//                 instagram: "https://instagram.com/amrit.kumar"
//             },
//             achievements: [
//                 "Top 100 in CodeChef",
//                 "Google Summer of Code 2023",
//                 "Microsoft Learn Student Ambassador"
//             ],
//             expertise: ["DSA", "Algorithms", "System Design", "Competitive Programming"]
//         },
//         {
//             name: "Krishna Sharma",
//             role: "Design & Documentation Lead",
//             image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
//             description: "Expert in UI/UX design and technical documentation. Creates beautiful and intuitive interfaces for our platform.",
//             social: {
//                 linkedin: "https://linkedin.com/in/krishna-sharma",
//                 github: "https://github.com/krishna-sharma",
//                 instagram: "https://instagram.com/krishna.sharma"
//             },
//             achievements: [
//                 "Adobe Certified Expert",
//                 "UI/UX Design Award 2023",
//                 "Technical Writing Certification"
//             ],
//             expertise: ["UI/UX Design", "Technical Writing", "Documentation", "Visual Design"]
//         },
//         {
//             name: "Gaurav Patel",
//             role: "GATE Content Specialist",
//             image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Specializes in GATE preparation content. Creates comprehensive study materials and practice questions.",
//             social: {
//                 linkedin: "https://linkedin.com/in/gaurav-patel",
//                 github: "https://github.com/gaurav-patel",
//                 instagram: "https://instagram.com/gaurav.patel"
//             },
//             achievements: [
//                 "GATE AIR 15",
//                 "Published Author - GATE Preparation Books",
//                 "10+ Years Teaching Experience"
//             ],
//             expertise: ["GATE Preparation", "Computer Science", "Teaching", "Content Creation"]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* Hero Section */}
//             <div className="relative overflow-hidden bg-primary">
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//                 </div>
//                 <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
//                     <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//                         Meet Our Contributors
//                     </h1>
//                     <p className="mt-6 text-xl text-white max-w-3xl">
//                         A team of passionate individuals dedicated to making quality education accessible to all.
//                     </p>
//                 </div>
//             </div>

//             {/* Contributors Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="space-y-16">
//                     {contributors.map((contributor, index) => (
//                         <div 
//                             key={index} 
//                             className={`flex flex-col ${
//                                 index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                             } items-center gap-8 lg:gap-16`}
//                         >
//                             {/* Image Section */}
//                             <div className="w-full lg:w-1/3">
//                                 <div className="relative">
//                                     <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
//                                     <img 
//                                         src={contributor.image} 
//                                         alt={contributor.name}
//                                         className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="w-full lg:w-2/3">
//                                 <div className="space-y-6">
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-gray-900">{contributor.name}</h2>
//                                         <p className="mt-2 text-xl text-primary font-semibold">{contributor.role}</p>
//                                     </div>

//                                     <p className="text-lg text-gray-600">{contributor.description}</p>

//                                     {/* Expertise Tags */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {contributor.expertise.map((skill, idx) => (
//                                             <span 
//                                                 key={idx}
//                                                 className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
//                                             >
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     {/* Achievements */}
//                                     <div className="space-y-3">
//                                         <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
//                                         <ul className="space-y-2">
//                                             {contributor.achievements.map((achievement, idx) => (
//                                                 <li key={idx} className="flex items-start">
//                                                     <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                                                     </svg>
//                                                     <span className="text-gray-600">{achievement}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* Social Links */}
//                                     <div className="flex space-x-4 pt-4">
//                                         <a 
//                                             href={contributor.social.linkedin}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                                             </svg>
//                                         </a>
//                                         <a 
//                                             href={contributor.social.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                             </svg>
//                                         </a>
//                                         <a 
//                                             href={contributor.social.instagram}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                             </svg>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Join Us Section */}
//                 <div className="mt-24 relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
//                     <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
//                         <div className="px-6 py-12 sm:px-12 lg:px-16">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                                     Want to Join Our Team?
//                                 </h2>
//                                 <p className="mt-4 text-lg text-gray-600">
//                                     We're always looking for passionate individuals to join our mission of making education accessible to all.
//                                 </p>
//                                 <div className="mt-8">
//                                     <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
//                                         Become a Contributor
//                                         <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contributors;








// // ... existing code ...
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* Hero Section */}
//             <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
//                     <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-24 sm:py-32 lg:py-40">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
//                                 <span className="text-sm font-medium text-white/80">Our Team</span>
//                                 <div className="w-1 h-1 rounded-full bg-white/60 mx-2"></div>
//                                 <span className="text-sm font-medium text-white/80">2024</span>
//                             </div>
                            
//                             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
//                                 Meet Our
//                                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
//                                     Distinguished Contributors
//                                 </span>
//                             </h1>
                            
//                             <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//                                 A collective of industry experts and passionate educators dedicated to transforming the landscape of technical education.
//                             </p>

//                             {/* Stats */}
//                             <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">10+</div>
//                                     <div className="text-sm text-gray-400">Years Experience</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">50K+</div>
//                                     <div className="text-sm text-gray-400">Students Taught</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">100+</div>
//                                     <div className="text-sm text-gray-400">Courses Created</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">95%</div>
//                                     <div className="text-sm text-gray-400">Success Rate</div>
//                                 </div>
//                             </div>

//                             {/* Scroll Indicator */}
//                             <div className="mt-16 flex justify-center">
//                                 <div className="animate-bounce">
//                                     <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contributors Section */}
// // ... existing code ...















// import React from 'react';

// const Contributors = () => {
//     const contributors = [
//         {
//             name: "Amrit Kumar",
//             role: "Content Lead - CSE Department",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
//             social: {
//                 linkedin: "https://linkedin.com/in/amrit-kumar",
//                 github: "https://github.com/amrit-kumar",
//                 instagram: "https://instagram.com/amrit.kumar"
//             },
//             achievements: [
//                 "Top 100 in CodeChef",
//                 "Google Summer of Code 2023",
//                 "Microsoft Learn Student Ambassador"
//             ],
//             expertise: ["DSA", "Algorithms", "System Design", "Competitive Programming"]
//         },
//         {
//             name: "Krishna Sharma",
//             role: "Design & Documentation Lead",
//             image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
//             description: "Expert in UI/UX design and technical documentation. Creates beautiful and intuitive interfaces for our platform.",
//             social: {
//                 linkedin: "https://linkedin.com/in/krishna-sharma",
//                 github: "https://github.com/krishna-sharma",
//                 instagram: "https://instagram.com/krishna.sharma"
//             },
//             achievements: [
//                 "Adobe Certified Expert",
//                 "UI/UX Design Award 2023",
//                 "Technical Writing Certification"
//             ],
//             expertise: ["UI/UX Design", "Technical Writing", "Documentation", "Visual Design"]
//         },
//         {
//             name: "Gaurav Patel",
//             role: "GATE Content Specialist",
//             image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Specializes in GATE preparation content. Creates comprehensive study materials and practice questions.",
//             social: {
//                 linkedin: "https://linkedin.com/in/gaurav-patel",
//                 github: "https://github.com/gaurav-patel",
//                 instagram: "https://instagram.com/gaurav.patel"
//             },
//             achievements: [
//                 "GATE AIR 15",
//                 "Published Author - GATE Preparation Books",
//                 "10+ Years Teaching Experience"
//             ],
//             expertise: ["GATE Preparation", "Computer Science", "Teaching", "Content Creation"]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* Hero Section */}
//             <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
//                     <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-24 sm:py-32 lg:py-40">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
//                                 <span className="text-sm font-medium text-white/80">Our Team</span>
//                                 <div className="w-1 h-1 rounded-full bg-white/60 mx-2"></div>
//                                 <span className="text-sm font-medium text-white/80">2024</span>
//                             </div>
                            
//                             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
//                                 Meet Our
//                                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
//                                     Distinguished Contributors
//                                 </span>
//                             </h1>
                            
//                             <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//                                 A collective of industry experts and passionate educators dedicated to transforming the landscape of technical education.
//                             </p>

//                             {/* Stats */}
//                             <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">10+</div>
//                                     <div className="text-sm text-gray-400">Years Experience</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">50K+</div>
//                                     <div className="text-sm text-gray-400">Students Taught</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">100+</div>
//                                     <div className="text-sm text-gray-400">Courses Created</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-white mb-2">95%</div>
//                                     <div className="text-sm text-gray-400">Success Rate</div>
//                                 </div>
//                             </div>

//                             {/* Scroll Indicator */}
//                             <div className="mt-16 flex justify-center">
//                                 <div className="animate-bounce">
//                                     <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contributors Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="space-y-16">
//                     {contributors.map((contributor, index) => (
//                         <div 
//                             key={index} 
//                             className={`flex flex-col ${
//                                 index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                             } items-center gap-8 lg:gap-16`}
//                         >
//                             {/* Image Section */}
//                             <div className="w-full lg:w-1/3">
//                                 <div className="relative">
//                                     <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
//                                     <img 
//                                         src={contributor.image} 
//                                         alt={contributor.name}
//                                         className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="w-full lg:w-2/3">
//                                 <div className="space-y-6">
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-gray-900">{contributor.name}</h2>
//                                         <p className="mt-2 text-xl text-primary font-semibold">{contributor.role}</p>
//                                     </div>

//                                     <p className="text-lg text-gray-600">{contributor.description}</p>

//                                     {/* Expertise Tags */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {contributor.expertise.map((skill, idx) => (
//                                             <span 
//                                                 key={idx}
//                                                 className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
//                                             >
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     {/* Achievements */}
//                                     <div className="space-y-3">
//                                         <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
//                                         <ul className="space-y-2">
//                                             {contributor.achievements.map((achievement, idx) => (
//                                                 <li key={idx} className="flex items-start">
//                                                     <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                                                     </svg>
//                                                     <span className="text-gray-600">{achievement}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* Social Links */}
//                                     <div className="flex space-x-4 pt-4">
//                                         <a 
//                                             href={contributor.social.linkedin}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                                             </svg>
//                                         </a>
//                                         <a 
//                                             href={contributor.social.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                             </svg>
//                                         </a>
//                                         <a 
//                                             href={contributor.social.instagram}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                             </svg>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Join Us Section */}
//                 <div className="mt-24 relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
//                     <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
//                         <div className="px-6 py-12 sm:px-12 lg:px-16">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                                     Want to Join Our Team?
//                                 </h2>
//                                 <p className="mt-4 text-lg text-gray-600">
//                                     We're always looking for passionate individuals to join our mission of making education accessible to all.
//                                 </p>
//                                 <div className="mt-8">
//                                     <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
//                                         Become a Contributor
//                                         <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contributors;














// import React from 'react';

// const Contributors = () => {
//     const contributors = [
//         {
//             name: "Amrit Kumar",
//             role: "Content Lead - CSE Department",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
//             social: {
//                 linkedin: "https://linkedin.com/in/amrit-kumar",
//                 github: "https://github.com/amrit-kumar",
//                 instagram: "https://instagram.com/amrit.kumar"
//             },
//             achievements: [
//                 "Top 100 in CodeChef",
//                 "Google Summer of Code 2023",
//                 "Microsoft Learn Student Ambassador"
//             ],
//             expertise: ["DSA", "Algorithms", "System Design", "Competitive Programming"]
//         },
//         {
//             name: "Krishna Sharma",
//             role: "Design & Documentation Lead",
//             image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
//             description: "Expert in UI/UX design and technical documentation. Creates beautiful and intuitive interfaces for our platform.",
//             social: {
//                 linkedin: "https://linkedin.com/in/krishna-sharma",
//                 github: "https://github.com/krishna-sharma",
//                 instagram: "https://instagram.com/krishna.sharma"
//             },
//             achievements: [
//                 "Adobe Certified Expert",
//                 "UI/UX Design Award 2023",
//                 "Technical Writing Certification"
//             ],
//             expertise: ["UI/UX Design", "Technical Writing", "Documentation", "Visual Design"]
//         },
//         {
//             name: "Gaurav Patel",
//             role: "GATE Content Specialist",
//             image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Specializes in GATE preparation content. Creates comprehensive study materials and practice questions.",
//             social: {
//                 linkedin: "https://linkedin.com/in/gaurav-patel",
//                 github: "https://github.com/gaurav-patel",
//                 instagram: "https://instagram.com/gaurav.patel"
//             },
//             achievements: [
//                 "GATE AIR 15",
//                 "Published Author - GATE Preparation Books",
//                 "10+ Years Teaching Experience"
//             ],
//             expertise: ["GATE Preparation", "Computer Science", "Teaching", "Content Creation"]
//         }
//     ];

//     const workflowSteps = [
//         {
//             title: "Student Contributors",
//             description: "Students who excel in their subjects create and share their notes",
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//             )
//         },
//         {
//             title: "Interactive PDFs",
//             description: "Creating engaging and interactive study materials",
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//             )
//         },
//         {
//             title: "GATE Preparation",
//             description: "Specialized content for GATE aspirants",
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//                 </svg>
//             )
//         },
//         {
//             title: "Faculty Verification",
//             description: "All content is reviewed and verified by faculty members",
//             icon: (
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//             )
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* Hero Section */}
//             <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//                 </div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
//                     <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-24 sm:py-32 lg:py-40">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
//                                 <span className="text-sm font-medium text-white/80">Student Initiative</span>
//                                 <div className="w-1 h-1 rounded-full bg-white/60 mx-2"></div>
//                                 <span className="text-sm font-medium text-white/80">2024</span>
//                             </div>
                            
//                             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
//                                 Student-Led
//                                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
//                                     Learning Community
//                                 </span>
//                             </h1>
                            
//                             <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//                                 A collaborative platform where students share knowledge, create interactive study materials, and support each other's academic journey.
//                             </p>

//                             {/* Workflow Steps */}
//                             <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                                 {workflowSteps.map((step, index) => (
//                                     <div key={index} className="relative">
//                                         <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
//                                         <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
//                                             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
//                                                 {step.icon}
//                                             </div>
//                                             <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
//                                             <p className="text-sm text-gray-300">{step.description}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Scroll Indicator */}
//                             <div className="mt-16 flex justify-center">
//                                 <div className="animate-bounce">
//                                     <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contributors Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="space-y-16">
//                     {contributors.map((contributor, index) => (
//                         <div 
//                             key={index} 
//                             className={`flex flex-col ${
//                                 index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                             } items-center gap-8 lg:gap-16`}
//                         >
//                             {/* Image Section */}
//                             <div className="w-full lg:w-1/3">
//                                 <div className="relative">
//                                     <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
//                                     <img 
//                                         src={contributor.image} 
//                                         alt={contributor.name}
//                                         className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="w-full lg:w-2/3">
//                                 <div className="space-y-6">
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-gray-900">{contributor.name}</h2>
//                                         <p className="mt-2 text-xl text-primary font-semibold">{contributor.role}</p>
//                                     </div>

//                                     <p className="text-lg text-gray-600">{contributor.description}</p>

//                                     {/* Expertise Tags */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {contributor.expertise.map((skill, idx) => (
//                                             <span 
//                                                 key={idx}
//                                                 className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
//                                             >
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     {/* Achievements */}
//                                     <div className="space-y-3">
//                                         <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
//                                         <ul className="space-y-2">
//                                             {contributor.achievements.map((achievement, idx) => (
//                                                 <li key={idx} className="flex items-start">
//                                                     <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                                                     </svg>
//                                                     <span className="text-gray-600">{achievement}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* Social Links */}
//                                     <div className="flex space-x-4 pt-4">
//                                         <a 
//                                             href={contributor.social.linkedin}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                                             </svg>
//                                         </a>
//                                         <a 
//                                             href={contributor.social.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                             </svg>
//                                         </a>
//                                         <a 
//                                             href={contributor.social.instagram}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                         >
//                                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                             </svg>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Join Us Section */}
//                 <div className="mt-24 relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
//                     <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
//                         <div className="px-6 py-12 sm:px-12 lg:px-16">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                                     Want to Contribute?
//                                 </h2>
//                                 <p className="mt-4 text-lg text-gray-600">
//                                     Join our student community and help create quality study materials for everyone.
//                                 </p>
//                                 <div className="mt-8">
//                                     <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
//                                         Join Our Team
//                                         <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contributors;












// import React from 'react';

// const Contributors = () => {
//     const contributors = [
//         {
//             name: "Amrit Kumar",
//             role: "Content Lead - CSE Department",
//             image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
//             social: {
//                 linkedin: "https://linkedin.com/in/amrit-kumar",
//                 github: "https://github.com/amrit-kumar",
//                 instagram: "https://instagram.com/amrit.kumar"
//             },
//             achievements: [
//                 "Top 100 in CodeChef",
//                 "Google Summer of Code 2023",
//                 "Microsoft Learn Student Ambassador"
//             ],
//             expertise: ["DSA", "Algorithms", "System Design", "Competitive Programming"]
//         },
//         {
//             name: "Krishna Sharma",
//             role: "Design & Documentation Lead",
//             image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
//             description: "Expert in UI/UX design and technical documentation. Creates beautiful and intuitive interfaces for our platform.",
//             social: {
//                 linkedin: "https://linkedin.com/in/krishna-sharma",
//                 github: "https://github.com/krishna-sharma",
//                 instagram: "https://instagram.com/krishna.sharma"
//             },
//             achievements: [
//                 "Adobe Certified Expert",
//                 "UI/UX Design Award 2023",
//                 "Technical Writing Certification"
//             ],
//             expertise: ["UI/UX Design", "Technical Writing", "Documentation", "Visual Design"]
//         },
//         {
//             name: "Gaurav Patel",
//             role: "GATE Content Specialist",
//             image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
//             description: "Specializes in GATE preparation content. Creates comprehensive study materials and practice questions.",
//             social: {
//                 linkedin: "https://linkedin.com/in/gaurav-patel",
//                 github: "https://github.com/gaurav-patel",
//                 instagram: "https://instagram.com/gaurav.patel"
//             },
//             achievements: [
//                 "GATE AIR 15",
//                 "Published Author - GATE Preparation Books",
//                 "10+ Years Teaching Experience"
//             ],
//             expertise: ["GATE Preparation", "Computer Science", "Teaching", "Content Creation"]
//         },
//         {
//             name: "Rahul Verma",
//             role: "Lead Developer",
//             image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
//             description: "Full-stack developer responsible for building and maintaining the entire platform. Expert in modern web technologies and system architecture.",
//             social: {
//                 linkedin: "https://linkedin.com/in/rahul-verma",
//                 github: "https://github.com/rahul-verma",
//                 twitter: "https://twitter.com/rahul_verma"
//             },
//             achievements: [
//                 "Senior Software Engineer at Tech Giants",
//                 "Open Source Contributor",
//                 "Technical Speaker at Major Conferences"
//             ],
//             expertise: ["React", "Node.js", "System Architecture", "Cloud Computing"]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             {/* Hero Section */}
//             <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="py-24 sm:py-32 lg:py-40">
//                         <div className="max-w-3xl mx-auto text-center">
//                             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
//                                 Our Team
//                             </h1>
                            
//                             <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//                                 Meet the talented individuals behind our platform - from content creators to developers, each bringing unique expertise to create an exceptional learning experience.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contributors Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                 <div className="space-y-16">
//                     {contributors.map((contributor, index) => (
//                         <div 
//                             key={index} 
//                             className={`flex flex-col ${
//                                 index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                             } items-center gap-8 lg:gap-16`}
//                         >
//                             {/* Image Section */}
//                             <div className="w-full lg:w-1/3">
//                                 <div className="relative">
//                                     <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-xl"></div>
//                                     <img 
//                                         src={contributor.image} 
//                                         alt={contributor.name}
//                                         className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Content Section */}
//                             <div className="w-full lg:w-2/3">
//                                 <div className="space-y-6">
//                                     <div>
//                                         <h2 className="text-3xl font-bold text-gray-900">{contributor.name}</h2>
//                                         <p className="mt-2 text-xl text-primary font-semibold">{contributor.role}</p>
//                                     </div>

//                                     <p className="text-lg text-gray-600">{contributor.description}</p>

//                                     {/* Expertise Tags */}
//                                     <div className="flex flex-wrap gap-2">
//                                         {contributor.expertise.map((skill, idx) => (
//                                             <span 
//                                                 key={idx}
//                                                 className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
//                                             >
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     {/* Achievements */}
//                                     <div className="space-y-3">
//                                         <h3 className="text-lg font-semibold text-gray-900">Key Achievements</h3>
//                                         <ul className="space-y-2">
//                                             {contributor.achievements.map((achievement, idx) => (
//                                                 <li key={idx} className="flex items-start">
//                                                     <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                                                     </svg>
//                                                     <span className="text-gray-600">{achievement}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     {/* Social Links */}
//                                     <div className="flex space-x-4 pt-4">
//                                         {contributor.social.linkedin && (
//                                             <a 
//                                                 href={contributor.social.linkedin}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                             >
//                                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                                                 </svg>
//                                             </a>
//                                         )}
//                                         {contributor.social.github && (
//                                             <a 
//                                                 href={contributor.social.github}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                             >
//                                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                                 </svg>
//                                             </a>
//                                         )}
//                                         {contributor.social.instagram && (
//                                             <a 
//                                                 href={contributor.social.instagram}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                             >
//                                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                                                 </svg>
//                                             </a>
//                                         )}
//                                         {contributor.social.twitter && (
//                                             <a 
//                                                 href={contributor.social.twitter}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="text-gray-600 hover:text-primary transition-colors duration-300"
//                                             >
//                                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                                                 </svg>
//                                             </a>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Join Us Section */}
//                 <div className="mt-24 relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
//                     <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
//                         <div className="px-6 py-12 sm:px-12 lg:px-16">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                                     Want to Contribute?
//                                 </h2>
//                                 <p className="mt-4 text-lg text-gray-600">
//                                     Join our team and help create quality study materials for everyone.
//                                 </p>
//                                 <div className="mt-8">
//                                     <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
//                                         Join Our Team
//                                         <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contributors;








import React from 'react';

const Contributors = () => {
    const contributors = [
        {
            name: "Amrit Kumar",
            role: "Content Lead - CSE Department",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
            description: "Leading content creation for Computer Science Department. Specializes in DSA, Algorithms, and System Design.",
            social: {
                linkedin: "https://linkedin.com/in/amrit-kumar",
                github: "https://github.com/amrit-kumar",
                instagram: "https://instagram.com/amrit.kumar"
            },
            achievements: [
                "Top 100 in CodeChef",
                "Google Summer of Code 2023",
                "Microsoft Learn Student Ambassador"
            ],
            expertise: ["DSA", "Algorithms", "System Design", "Competitive Programming"]
        },
        {
            name: "Krishna Sharma",
            role: "Design & Documentation Lead",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
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
            name: "Gaurav Patel",
            role: "GATE Content Specialist",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
            description: "Specializes in GATE preparation content. Creates comprehensive study materials and practice questions.",
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
            name: "Rahul Verma",
            role: "Lead Developer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
            description: "Full-stack developer responsible for building and maintaining the entire platform. Expert in modern web technologies and system architecture.",
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