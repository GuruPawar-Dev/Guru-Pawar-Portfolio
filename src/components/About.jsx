import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Lottie from "lottie-react";
import AboutAnimation from "../assets/Animation - 1748599977204.json";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-center gap-6 bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About</h2>
        <ul>
          <li className="flex gap-3 py-4">
            {/* <IoArrowForward size={24} className="mt-1 shrink-0" /> */}
            <div className="max-w-md">
              {/* <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1> */}
              <p className="text-sm md:text-md">
                A recent B.Tech graduate in Computer Science and Engineering from NIT Andhra Pradesh, with a strong academic background built during senior secondary education at Narayana E Techno School, Bangalore (94.8%).
                <br></br><br></br>
                Skilled in full-stack web development, Java and Python programming, and passionate about machine learning, ethical hacking, and open-source development. I work comfortably across both frontend and backend, leveraging tools and technologies like Node.js, SQL, MongoDB, TensorFlow, NumPy, and Git/GitHub to build efficient, scalable, and user-friendly applications.
                <br></br><br></br>
                Always eager to solve real-world problems through clean code, explore emerging tech, and collaborate on impactful projects.</p>
            </div>
          </li>

          {/* <li className="flex gap-3 py-4">
            <IoArrowForward size={24} className="mt-1 shrink-0" />
            <div className="max-w-md">
              <h1 className="text-xl md:text-2xl font-semibold">Database Developer</h1>
              <p className="text-sm md:text-md">
                Experience managing and designing scalable database architectures, optimizing queries, and ensuring data integrity.
              </p>
            </div>
          </li>

          <li className="flex gap-3 py-4">
            <IoArrowForward size={24} className="mt-1 shrink-0" />
            <div className="max-w-md">
              <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
              <p className="text-sm md:text-md">
                Skilled in building robust backend systems using Node.js, Express, and integrating RESTful APIs securely.
              </p>
            </div>
          </li> */}
        </ul>
      </div>

      {/* Lottie Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie
          animationData={AboutAnimation}
          loop={true}
          className="w-full max-w-xs md:max-w-sm aspect-[1/1]"
        />
      </div>
    </div>
  );
};

export default About;
