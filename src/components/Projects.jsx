import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "DesignXcel",
      description:
        "Inspiring summer camp learning school Website for creative minds",
      liveLink: "https://designxcel.web.app/", // Replace with the actual live link
      githubLink: "https://github.com/example/designxcel", // Replace with the actual GitHub link
    },
    {
      title: "TalentSync",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      liveLink: "https://talentsync.netlify.app/", // Replace with the actual live link
      githubLink: "https://github.com/example/talentsync", // Replace with the actual GitHub link
    },
    {
      title: "WonderKin",
      description:
        "Mobile app for booking instant pickup & dropoff across major cities.",
      liveLink: "https://pee-tee-mawnd.web.app/", // Replace with the actual live link
      githubLink: "https://github.com/example/wonderkin", // Replace with the actual GitHub link
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <div className="relative h-96">
                  <iframe
                    src={project.liveLink}
                    title={project.title}
                    className={`w-full h-full object-cover rounded ${
                      isHovered ? "block" : "hidden"
                    }`}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className="text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary"
                >
                  Live Link
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
