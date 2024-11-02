import React from "react";
import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import web6 from "../images/web6.png";

const Project = () => {
  return (
    <div>
      <div className="w-full max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl mb-1 md:mb-6 dark:text-gray-100 capitalize font-semibold">
          Projects I Created
        </h3>
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

      <div className="flex flex-col gap-8 py-12 lg:flex-row lg:flex-wrap lg:justify-center">
        <div className="basis-1/3 flex-1 ">
          <img
            src={web1}
            alt=""
            className="rounded-lg object-cover "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web2}
            alt=""
            className="rounded-lg object-cover "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web3}
            alt=""
            className="rounded-lg object-cover "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web4}
            alt=""
            className="rounded-lg object-cover "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web5}
            alt=""
            className="rounded-lg object-cover "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web6}
            alt=""
            className="rounded-lg object-cover "
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
