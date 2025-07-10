import React from "react";
import { ChevronDown, Download, Mail } from "lucide-react";


const Hero = () => {
  const handleResumeClick = () => {
    window.open("/Manohar_Resume.pdf", "_blank");
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-700/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <img
                src="/Photo.JPG"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-red-500/50 relative z-10 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
          Hi, I'm Manohar
        </h1>

        <p className="text-xl md:text-2xl text-red-100 mb-4 font-light">
          Mern Stack Developer
        </p>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with modern technologies. Passionate
          about clean code, innovative solutions, and bringing ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Hire Me
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handleResumeClick}
            className="group px-8 py-4 border-2 border-red-500 text-red-400 rounded-full font-semibold hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              View Resume
            </span>
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-400 mx-auto cursor-pointer hover:text-red-300 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
