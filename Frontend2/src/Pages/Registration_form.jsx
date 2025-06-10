// src/components/RegisterUser.jsx

import React from 'react';

const RegisterUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card min-h-screen font-sans">
      {/* Registration Form */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          <div className="form-card rounded-2xl shadow-2xl p-6 sm:p-8 transform transition-all duration-300 hover:shadow-3xl">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Student Registration</h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Join our academic community and access premium resources
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="group">
                <label className="form-label">Full Name</label>
                <input type="text" required className="form-input" placeholder="Enter your full name" />
              </div>

              <div className="group">
                <label className="form-label">College</label>
                <input type="text" required className="form-input" placeholder="Enter your college name" />
              </div>

              <div className="group">
                <label className="form-label">Branch</label>
                <select required className="form-input">
                  <option value="">Select your branch</option>
                  <option value="cse">Computer Science Engineering</option>
                  <option value="ece">Electronics & Communication</option>
                  <option value="ee">Electrical Engineering</option>
                  <option value="me">Mechanical Engineering</option>
                  <option value="ce">Civil Engineering</option>
                </select>
              </div>

              <div className="group">
                <label className="form-label">Registration Number</label>
                <input type="text" required className="form-input" placeholder="Enter your registration number" />
              </div>

              <div className="group">
                <label className="form-label">Roll Number</label>
                <input type="text" required className="form-input" placeholder="Enter your roll number" />
              </div>

              <div className="group">
                <label className="form-label">Current CGPA</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  required
                  className="form-input"
                  placeholder="Enter your current CGPA"
                />
              </div>

              <div className="flex items-start space-x-3 terms-box p-3 sm:p-4 rounded-lg">
                <div className="flex items-center h-5">
                  <input type="checkbox" required className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                </div>
                <label className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:text-secondary dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:text-secondary dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Submit Registration</span>
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </form>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Already have an account?{' '}
                <a href="#" className="text-primary hover:text-secondary dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
