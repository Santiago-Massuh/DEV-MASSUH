import React from "react";
import hero from "../assets/images/foto porfolio.jpg";
const Hero = () => {
  const social_media = [
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/santiagomassuh/",
    },
    { icon: "logo-github", link: "https://github.com/Santiago-Massuh" },
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/santi.massuh/",
    },
    //{ icon: "logo-twitter", link: "https://twitter.com/..." },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-4/6 h-full object-cover w-8/12"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Santiago Massuh</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon.icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link} target="_blank">
                  <ion-icon name={icon.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
