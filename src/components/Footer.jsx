import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gradient-to-r from-[#0c0c1d] via-[#1f2a41] to-[#2e3a5e] text-white px-6 py-10 md:px-20 md:py-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-0">Contact</h1>
        <div className="flex gap-6 text-3xl">
          <a
            href="mailto:gurupawr.dev@gmail.com"
            // target="_blank"
            // rel="noopener noreferrer"
            className="hover:text-[#ffb84c]"
          >
            <MdOutlineEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/guru-pawar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a66c2]"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/GuruPawar-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/gurupawardev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffa116]"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
