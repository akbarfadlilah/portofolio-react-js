import React, { useEffect, useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import akbarlogo from "../assets/akbarlogo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#porto" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("navbar");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-black"
      }`}
    >
      <div className="container font-medium px-4 mx-auto sm:px-16 flex item-center justify-between lg:py-[10px] py-[10px] sm:py-[10px]">
        <div
          className={`w-[35px] flex items-center order-1 sm:order-2 lg:order-1 ${
            sticky ? "text-black" : "text-white"
          }`}
        >
          <img src={akbarlogo} className="" />
          <h1 className="font-extrabold">
            AK<span className="text-[#FFA500]">BAR</span>
          </h1>
        </div>
        <div
          className={`z-[999] cursor-pointer text-[#FFA500] order-2 sm:order-1 lg:hidden`}
          onClick={() => setOpen(!open)}
        >
          {open ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>

        <div className="hidden justify-center lg:block lg:order-2">
          <ul className="flex gap-1 items-center border-2 border-[#FFA500] rounded-full">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className="py-[10px] px-[18px] text-[#FFA500] hover:bg-[#FFA500] hover:text-white rounded-full"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block font-medium order-3">
          <button className="flex py-[5px] px-[10px] text-[#FFA500] border-2 border-[#FFA500] rounded-full">
            <AiOutlineShopping size={23} />
            Product
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
      >
        <ul className="text-lg font-medium flex flex-col justify-center h-full gap-10 py-2">
          {menuLinks?.map((menu, i) => (
            <li
              onClick={() => setOpen(false)}
              key={i}
              className="px-6 hover:text-[#FFA500]"
            >
              <a href={menu?.link}>{menu?.name}</a>
            </li>
          ))}
          <li className="flex text-[#FFA500] px-4 sm:px-16 py-[10px] sm:hidden">
            <AiOutlineShopping size={23} />
            PRODUCT
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
