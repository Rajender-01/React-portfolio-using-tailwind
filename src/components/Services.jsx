import React from "react";
import CardImage1 from "../images/design.png";
import CardImage2 from "../images/code.png";
import CardImage3 from "../images/consulting.png";

const Services = () => {
  return (
    <div className="pb-16">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl mb-1 md:mb-6 dark:text-gray-100 capitalize font-semibold">Services I offer</h3>
        <p className=" text-md md:text-lg mb-1.5 leading-7  text-gray-600 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur molestias quis,{" "}
          <span className="text-blue-600">biodata</span> error corrupti officia
          assumenda laudantium alias sint exercitationem dolorem, odit dolorum{" "}
          <span className="text-blue-600">biodata </span>
          qui eveniet repellendus.
        </p>
        <p className="text-md md:text-lg py-2 leading-7  text-gray-600 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </p>
      </div>

      <div className="card lg:flex gap-8 mt-10">
        <div className="text-center shadow-lg p-8 rounded-xl my-5 dark:shadow-slate-800">
          <img className="w-28 h-28 m-auto" src={CardImage1} alt="" />
          <h3 className="text-lg font-semibold pt-3 pb-4 dark:text-gray-100">
            Beautiful Design
          </h3>
          <p className="dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            saepe!
          </p>
          <h4 className="py-3 text-blue-800">Framework I Use</h4>
          <p className="text-gray-600 pb-1 dark:text-gray-400">Reactjs</p>
          <p className="text-gray-600 py-1 dark:text-gray-400">Tailwind</p>
          <p className="text-gray-600 py-1 dark:text-gray-400">Nodejs</p>
        </div>
        <div className="text-center shadow-lg p-8 rounded-xl my-5 dark:shadow-slate-800">
          <img className="w-28 h-28 m-auto" src={CardImage2} alt="" />
          <h3 className="text-lg font-semibold pt-3 pb-4 dark:text-gray-100">
            Beautiful Design
          </h3>
          <p className="dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            saepe!
          </p>
          <h4 className="py-3 text-blue-800">Framework I Use</h4>
          <p className="text-gray-600 pb-1 dark:text-gray-400">Reactjs</p>
          <p className="text-gray-600 py-1 dark:text-gray-400">Tailwind</p>
          <p className="text-gray-600 py-1 dark:text-gray-400">Nodejs</p>
        </div>
        <div className="text-center shadow-lg p-8 rounded-xl my-5 dark:shadow-slate-800">
          <img className="w-28 h-28 m-auto" src={CardImage3} alt="" />
          <h3 className="text-lg font-semibold pt-3 pb-4 dark:text-gray-100">
            Beautiful Design
          </h3>
          <p className="dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            saepe!
          </p>
          <h4 className="py-3 text-blue-800">Framework I Use</h4>
          <p className="text-gray-600 pb-1 dark:text-gray-400">Reactjs</p>
          <p className="text-gray-600 py-1 dark:text-gray-400">Tailwind</p>
          <p className="text-gray-600 py-1 dark:text-gray-400">Nodejs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
