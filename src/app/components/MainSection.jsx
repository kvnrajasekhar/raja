"use client";
import React from "react";
import '../../app/globals.css';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const MainSection = () => {
  return (
    <section className="main-section lg:py-16 px-8 sm:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start w-auto"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9100] to-[#ff7800]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              className="neon-shadow"
              sequence={[
                "Rajasekhar",
                1000,
                "a Web Developer",
                1000,
                "a DevOps Seeker",
                1000,
                "a Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A Tech guy having foundation in Full-Stack Web Development.
          </p>
          <div>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kanagalavnrajasekhar@gmail.com&su=Subject&body=Body"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br no-underline from-[#ff9100] to-[#ff9100] hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1bejYU_kMEunZWpGIZS6d1gGzq5jC4nnv/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br no-underline from-[#ff9100] to-[#ff9100] hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2.5">
                My Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/main-b and w.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 md:place-self-center -translate-y-1/2 top-1/2 left-1/2 lg:h-[400px] lg:w-[300px]"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
      {/* Scroll Down Button */}
      <div className="flex justify-center mt-8">
        <motion.button
          className="p-3 rounded-full text-[#ff9100] bg-transparent border-2 border-[#ff9100] flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <BsChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default MainSection;
