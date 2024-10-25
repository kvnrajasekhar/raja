"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Leadership</li>
        <li>Organizational</li>
        <li>Team Work</li>
        <li>Problem Solving</li>
        <li>Adaptability</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Graduation - Computer Science and Engineering &#40; IoT &#41; at R.V.R & J.C. College of Engineering, Guntur - &#40;2021 - 2025&#41; </li>
        <li>Intermediate - Sri Chaitanya junior College, Guntur -  &#40;2019 - 2021&#41; </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete Web Development Bootcamp 2024 - Udemy</li>
        <li>Introduction to DevOps - IBM</li>
        <li>Programming in java - NPTEL</li>
        <li>Git for beginners - by KodeKloud</li>
        <li>Microsoft Azure AI Fundamentals - Microsoft</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-img.png" width={500} height={500} alt="About Image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Full-Stack Web Developer and aspiring DevOps professional 
          with a zeal for building interactive and responsive web applications. 
          My background includes proficiency in JavaScript, React, Node.js, 
          Express, HTML, CSS, PHP, and Git. I am an avid learner, continually seeking 
          to broaden my expertise and capabilities. As a collaborative team member, 
          I am enthusiastic about partnering with others to develop outstanding applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
