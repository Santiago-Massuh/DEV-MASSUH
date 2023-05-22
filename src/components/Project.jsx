import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
// import project2 from "../assets/images/project-2.png";
import project_person from "../assets/images/palitos.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "SportPlanet",
      github_link: "https://github.com/Santiago-Massuh/SportPlanet",
      live_link: "https://sport-planet-staff-nbkv.vercel.app/",
    },
    // {
    //   img: project2,
    //   name: "Pokemón",
    //   github_link: "https://github.com/Santiago-Massuh/PI-Pokemon",
    //   //live_link: "https://my-favorite-videos-h6jj.vercel.app/",
    // },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <br />
        <br />
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1, //CANTIDAD DE SLIDES QUE SE VEN EN MYPROJECTS
              },
            }}
            loop={false} //PONER EN TRUE SI QUIERO QUE DEPLACE CUANDO HAYA MAS PROYECTOS
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
