import React, { useState } from 'react';

const DonateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Donate Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 cursor-pointer right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
        <span className="hidden sm:inline">Donate</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-2">Support Our Mission 💚</h2>
              <p className="text-gray-600 mb-6">
                Scan the QR code below to make a donation and help us grow!
              </p>

              {/* QR Code */}
              <div className="bg-gray-100 p-4 rounded-xl shadow-inner inline-block">
                <img
                  src="/qr-code.png" // Place your QR in public folder or replace with import
                  alt="Donate QR"
                  className="w-64 h-64 object-contain"
                />
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Every contribution means a lot. Thank you for supporting us 🙏
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateModal;
