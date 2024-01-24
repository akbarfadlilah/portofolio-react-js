import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="shadow shadow-black">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#home"
              className="text-base leading-6 text-gray-500 hover:text-[#FFA500]"
            >
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#skills"
              className="text-base leading-6 text-gray-500 hover:text-[#FFA500]"
            >
              Skills
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#about"
              className="text-base leading-6 text-gray-500 hover:text-[#FFA500]"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#porto"
              className="text-base leading-6 text-gray-500 hover:text-[#FFA500]"
            >
              Projects
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#Sertifikats"
              className="text-base leading-6 text-gray-500 hover:text-[#FFA500]"
            >
              Certificate
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#contact"
              className="text-base leading-6 text-gray-500 hover:text-[#FFA500]"
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="flex items-center justify-center text-gray-400 items-center space-x-3">
          <a
            href="https://instagram.com/akbarfadlilahh"
            className="hover:text-[#FFA500]"
          >
            <AiFillInstagram size={25} />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://wa.me/6285832606545"
            className="hover:text-[#FFA500]"
          >
            <AiOutlineWhatsApp size={25} />
            <span className="sr-only">Whatsapp</span>
          </a>
          <a
            href="https://github.com/akbarfadlilah"
            className="hover:text-[#FFA500]"
          >
            <AiFillGithub size={25} />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/akbarfadlilah/"
            className="hover:text-[#FFA500]"
          >
            <FaLinkedinIn size={25} />
            <span className="sr-only">Linkedin</span>
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Akbar. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
