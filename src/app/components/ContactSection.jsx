"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (typeof window !== "undefined") {
      const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=kanagalavnrajasekhar@gmail.com&su=${subject}&body=${message}`;
      window.open(mailtoURL, '_blank');
    }

    setEmailSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 my-8 md:my-12 py-12 md:py-24 gap-6 relative z-0 px-4"
    >
      {/* Background Blur */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff9500] to-transparent rounded-full h-64 w-64 md:h-80 md:w-80 z-0 blur-lg absolute top-3/4 -left-8 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Contact Info */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-full">
          I am always open to connecting with like-minded professionals, enthusiasts, and potential collaborators.
          If you share an interest in web development, DevOps, IoT, or simply want to exchange ideas, feel free to reach out!
        </p>

        {/* <div className="socials flex items-center space-x-4">
          <Link href="https://github.com/kvnrajasekhar/" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://linkedin.com/in/kvnrs23" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={40} height={40} />
          </Link>
        </div> */}

        {/* LinkedIn Badge */}
        <div className="mt-4">
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="kvnrs23"
            data-version="v1"
          >
            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kvnrs23"></a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Mail sent successfully!...</p>
        ) : (
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div>
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
            <div>
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
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
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

      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
    </section>
  );
};

export default ContactSection;
