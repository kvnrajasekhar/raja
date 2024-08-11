"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [mailtoURL, setMailtoURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const newMailtoURL = `mailto:kanagalavnrajasekhar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setMailtoURL(newMailtoURL);

    setEmailSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff9500] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am always open to connecting with like-minded professionals, enthusiasts, and potential collaborators.
          If you share an interest in web development, DevOps, or simply want to exchange ideas, feel free to reach out!.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/kvnrajasekhar/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/kvnrs23">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div>
            <p className="text-green-500 text-sm mt-2">
              Mail sent successfully&#x21;...
            </p>
            <a
              href={mailtoURL}
              className="hidden" // Hide the link, but it will still trigger the default mail client
            >
              Email
            </a>
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="yourmail@domain.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Greetings"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Happy to connect with you..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#ff9500] hover:bg-[#ff9500] text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
