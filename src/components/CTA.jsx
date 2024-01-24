import React, { useState } from "react";
import aboutme from "../assets/aboutme.svg";
import "../styles/CTA.css"; // Import the CSS file for CTA component

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="about" className="mx-4 rounded-xl bg-gray-900 dark:text-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-white">
            More About <span className="text-[#FFA500]">Me</span>
          </h2>
          <p className="mb-4 text-slate-300">
            I am a highly committed professional to self-development and goal
            achievement. With an educational background in Computer Science, I
            have developed skills and knowledge in programming. Additionally, I
            have built various web and Android applications that have allowed me
            to face diverse challenges and achieve significant results. I am
            known for having strong analytical abilities and the capability to
            make sound decisions in complex situations. I also possess good
            communication skills, both written and verbal, enabling me to
            interact effectively with various stakeholders, ranging from
            colleagues to clients.
          </p>

          <p className="mb-4 text-slate-300">
            Furthermore, I have a high enthusiasm for learning and continuous
            self-improvement. I am always seeking opportunities to enhance my
            skills and knowledge through training, courses, and the latest
            literature. I believe that investing in personal development is the
            key to achieving long-term success.
          </p>

          <p className="mb-4 text-slate-300">
            Outside of my field, I have experience as an egg trader for over 2
            years, providing me with opportunities for personal development in
            the retail business.
          </p>

          <p className="text-slate-300">
            I am very enthusiastic about new opportunities and ready to
            contribute to challenging and meaningful projects.
          </p>
        </div>
        <div className="grid gap-4 mt-2">
          <img
            src={aboutme}
            alt="bugcrowd logo"
            className={`mt-4 w-full lg:mt-10 rounded-lg ${
              isHovered ? "pulse" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
