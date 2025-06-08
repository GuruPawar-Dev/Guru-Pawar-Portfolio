import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">Projects</h1>
      
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl w-full">
        {/* Fit Frenzy */}
        <div className="flex-grow max-w-sm">
          <ProjectCard
            title="Fit Frenzy - E-Commerce Website"
            main="Developed a fully functional fitness e-commerce site using HTML, CSS, JavaScript, PHP, and SQL. Streamlined user experience and increased average session duration by 35 seconds."
            sourceLink="https://github.com/GuruPawar-Dev/FitFreany_Ecommers_website"
          />
        </div>

        {/* Implicit Emotion Analysis */}
        <div className="flex-grow max-w-sm">
          <ProjectCard
            title="Implicit Emotion Analysis with Supervised Contrastive Learning"
            main="Enhanced sentiment analysis using supervised contrastive pre-training on SemEval2014 data. Reduced training time by days using TensorFlow and PyTorch frameworks."
            sourceLink="https://drive.google.com/file/d/1ulBifd0EGsVQS49ZtE7XIioR3xk_K6rK/view?usp=sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
