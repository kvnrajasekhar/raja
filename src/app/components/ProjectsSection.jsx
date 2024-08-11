"use client";
import React, { useState, useRef } from "react";
import ProjectTemplate from "./ProjectTemplate";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tradeit",
    description: "It is a web platform which allows to you to search the crypto currencies and shows trending coins.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kvnrajasekhar/trade-app",
    previewUrl: "https://trade-app-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Rividy sphiria",
    description: "It is an landing page web site for a e-commerce platform that sells clothes",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kvnrajasekhar/fashionsite",
    previewUrl: "https://kvnrajasekhar.github.io/fashionsite",
  },
  {
    id: 3,
    title: "Caluculator Application",
    description: "Caluclator Web Appliaction that performs basic caluculation funtions.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kvnrajasekhar/calculator",
    previewUrl: "https://kvnrajasekhar.github.io/calculator" ,
  },
  {
    id: 4,
    title: "Home Automation Learning Kit",
    description: "IoT based smart automaion learning kit whuch is used for home automation.",
    image: "/images/projects/4.png",
    tag: ["All","IoT"],
    gitUrl: "https://drive.google.com/file/d/1DImbvdzTPeWngzdJteHt4QuZXi0K4daV/view?usp=drive_link",
    previewUrl: "https://drive.google.com/file/d/1DImbvdzTPeWngzdJteHt4QuZXi0K4daV/view?usp=drive_link",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectTemplate
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
