import React from 'react';
import { Code2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-700/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-4 border-red-500/50">
              <Code2 className="w-10 h-10 text-white animate-bounce" />
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
          Loading Portfolio
        </h1>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-loading-bar"></div>
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200"></div>
        </div>
        
        {/* Loading message */}
        <p className="text-gray-400 mt-6 text-sm animate-pulse">
          Preparing something amazing...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;