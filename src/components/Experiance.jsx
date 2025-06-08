import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import Vedantu from "../assets/vedantulogo.jpeg";
import BARC from "../assets/BARClogo.jfif";



const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span> */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span> */}
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-6">
          {/* Vedantu */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <img
              src={Vedantu}
              alt="Vedantu Logo"
              className="w-16 h-16 object-contain"
            />
            <div className="text-white">
              <h2 className="leading-tight">Master Teacher Trainee, Vedantu</h2>
              <p className="text-sm leading-tight font-thin">
                Feb 2025 – Present
              </p>
              <ul className="text-sm py-2">
                <li>- Teaching Computer Science to JEE students.</li>
                <li>- Enhanced communication & technical delivery.</li>
              </ul>
              <a
                href="https://drive.google.com/file/d/1Cy3PbTqwL02oaCRqJKfKXIWwk6BKSKUC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 px-4 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-500 text-sm">
                  View Certificate
                </button>
              </a>
            </div>
          </div>

          {/* BARC */}
          <div className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <img
              src={BARC}
              alt="BARC Logo"
              className="w-16 h-16 object-contain"
            />
            <div className="text-white">
              <h2 className="leading-tight">Intern, BARC</h2>
              <p className="text-sm leading-tight font-thin">
                May 2024 – July 2024
              </p>
              <ul className="text-sm py-2">
                <li>- Built ReactJS app for radiotherapy planning.</li>
                <li>- Worked on contour manipulation and UI design.</li>
              </ul>
              <a
                href="https://drive.google.com/file/d/1gAc2AH61R5v7rFNqJlLKaa_1moTM2pnW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 px-4 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-500 text-sm">
                  View Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
