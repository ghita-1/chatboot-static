import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-sm shadow-lg rounded-lg">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <span className="text-gray-700 font-bold">Chatbot</span>
          <span className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-1 16v2h2v-2zm1.23-2.6a4 4 0 01-.92-7.4 3.92 3.92 0 012.23-.4 4 4 0 013 6 6.73 6.73 0 00-1.69 3.11 1.4 1.4 0 01-2.7 0A7.67 7.67 0 0112.23 13.4z" />
            </svg>
          </span>
        </div>



        {/* Chat Messages */}
        <div className="p-4 overflow-y-auto">
          <div className="flex items-start mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div className="ml-3">
              <div className="bg-gray-200 p-3 rounded-lg text-sm text-gray-700">
                Hello! How can I assist you today?
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 overflow-y-auto ">
          <div className="flex items-start mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
            <div className="ml-3">
              <div className="bg-black p-3 rounded-lg text-sm text-white">
                Hello! How can I assist you today?
              </div>
            </div>
            
          </div>
        </div>



        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button type="submit" className=" p-2 rounded-lg bg-black text-white">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
