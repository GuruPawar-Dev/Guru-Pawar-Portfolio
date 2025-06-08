import React,{ useState} from "react";
import avatarImg from "../assets/1000176388.jpg";
import TextChange from "./TextChange.jsx";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open(
      "https://drive.google.com/file/d/1t_V4R-Bs11BdBvKEYjGvvxv3bhRWnB1E/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="text-white flex flex-wrap-reverse justify-between items-center gap-6 px-6 py-10 md:p-20">
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl md:text-6xl font-bold leading-tight tracking-tight">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl mt-3 tracking-tight">
          NIT Andhra Pradesh | Former BARC Intern | Java Enthusiast | Ethical Hacking Explorer | Web Dev Practitioner
        </p>
        <button className="mt-6 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
      {/* Gradient Border Around Image */}
      <div className="p-[4px] rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block shadow-lg">
        <div className="rounded-lg overflow-hidden w-72 md:w-96">
          <img
            src={avatarImg}
            alt="Atal Bridge"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Resume Button */}
      <button
        onClick={handleClick}
        className="mt-2 px-5 py-2 bg-[#465697] text-white text-sm md:text-base font-semibold rounded-full hover:scale-105 duration-300"
      >
        {clicked ? "My Resume" : "View my resume"}
      </button>
    </div>
    </div>
  );
};

export default Home;
