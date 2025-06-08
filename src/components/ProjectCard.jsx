import React from "react";

const ProjectCard = ({ title, main, sourceLink }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col justify-between w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl min-h-[360px]">
      {/* Title with fixed height to align rows */}
      <h3 className="text-xl md:text-2xl font-bold leading-snug mb-2 min-h-[64px]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-200 flex-grow">
        {main}
      </p>

      {/* Button */}
      <div className="mt-4">
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <button className="w-full text-white py-2 px-4 text-sm md:text-md hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
