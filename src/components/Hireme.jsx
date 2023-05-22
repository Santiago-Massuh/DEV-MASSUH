import React from "react";
import hireMe from "../assets/images/monitor-web.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className=" text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
            Are you looking for a Full Stack developer with knowledge of
            technologies such as React, Node, Express, Redux, MongoDB, Mongoose,
            PostgreSQL, Sequelize, Git, GitHub, HTML, and CSS? Look no further!
            Here I am, ready to tackle any challenge that comes my way. I am
            passionate about technology, a true lover of clean and efficient
            code. But I don't stop there, I also have leadership skills, the
            ability to learn quickly, and a positive attitude that allows me to
            bring value to any team. Feel free to reach out to me for any
            challenge your team may have!
          </p>
          <a href="#contact">
            <button className="btn-primary mt-10">Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[21rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
