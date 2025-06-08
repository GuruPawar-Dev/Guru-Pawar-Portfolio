import React from "react";
import ProfileImage from "../assets/IMG_0731 (2).jpg";

const Start = ({ onViewPortfolio }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-yellow-300 px-6 py-12">
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full p-6 md:p-12">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-black mb-4">
            Hello, I am <br />Guru Pawar
          </h1>
          <hr className="border-black mb-4" />
          <p className="text-lg text-gray-900 mb-8">
            Aspiring Software Developer with a strong foundation in programming and problem-solving,
            recently graduated and eager to contribute to innovative projects in the IT industry.
          </p>
          <button
            onClick={onViewPortfolio}
            className="text-lg font-semibold text-black hover:underline"
          >
            View My Portfolio
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <img
            src={ProfileImage}
            alt="Guru Pawar"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;



