import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import ProfileImage from "../images/profile-icon.png";

const Intro = () => {
  return (
    <div className="pb-16">
      <div className="text-center p-6">
        <h2 className="text-3xl font-medium py-2 text-blue-500 font-serif md:text-4xl md:py-4  ">
          Rajender Kumar
        </h2>
        <h3 className="text-lg font-medium py-1 md:text-xl dark:text-gray-400">
          Full Stack Developer
        </h3>
        <p className="py-4 text-md leading-7 text-gray-600 lg:text-lg max-w-2xl m-auto dark:text-gray-400">
          Lorem ipsum dolor , quis consectetur esse culpa, nam cupiditate ipsa
          pariatur nemo facilis minus saepe spoam fpo eos?
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-9 py-3 text-gray-600">
        <AiFillTwitterCircle className="cursor-pointer hover:scale-110 transition-all duration-300" />
        <AiFillInstagram className="cursor-pointer hover:scale-110 transition-all duration-300" />
        <AiFillLinkedin className="cursor-pointer hover:scale-110 transition-all duration-300" />
      </div>
      <div className="mt-12  drop-shadow-md relative bg-gradient-to-b from-blue-600  rounded-full w-48 h-48 mx-auto overflow-hidden md:w-52 md:h-52 ">
        <img
          className="object-cover h-60 pt-3 "
          src={ProfileImage}
          alt="ProfileImage"
        />
      </div>
    </div>
  );
};

export default Intro;
