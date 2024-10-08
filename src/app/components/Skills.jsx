"use client";

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';


const Skills = () => {


    const showHiddenCard = (id) => {
        document.getElementById(`${id}-hidden-card`).style.display = 'block';
    };

    const hideHiddenCard = (id) => {
        document.getElementById(`${id}-hidden-card`).style.display = 'none';
    };

    return (
        <div className="flex flex-wrap justify-between mx-8 lg:mx-16 text-white" id="skills">
            <div className="w-full wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-4xl font-bold mb-8">Skills</h1>
                <div className="flex flex-wrap">
                    {/* Column 1 */}
                    <div className="w-full md:w-1/3 p-4">
                        {/* Skill 1: HTML */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">HTML</h6>
                                <h6 className="font-bold">90%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '90%' }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('html')}
                                onMouseOut={() => hideHiddenCard('html')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] z-10 rounded-lg shadow-md hidden "
                                id="html-hidden-card"
                            >
                                <h6 className="text-center">HTML</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Hands-on experience with HTML through projects.</li>
                                    <li className="mb-1">Skilled in creating well-structured, semantic HTML markup.</li>
                                    <li className="mb-1">Familiarity with HTML5 features and best practices.</li>
                                    <li className="mb-1">Proficient in HTML5 standards, integrating HTML with CSS and JavaScript.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Skill 2: CSS */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">CSS</h6>
                                <h6 className="font-bold">85%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '85%' }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('css')}
                                onMouseOut={() => hideHiddenCard('css')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] z-10 rounded-lg shadow-md hidden "
                                id="css-hidden-card"
                            >
                                <h6 className="text-center">CSS</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in styling web pages using CSS.</li>
                                    <li className="mb-1">Knowledge of CSS preprocessors like SASS/SCSS.</li>
                                    <li className="mb-1">Familiarity with responsive design and CSS frameworks like Bootstrap.</li>
                                    <li className="mb-1">Proficient in CSS layout techniques and cross-browser compatibility.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Skill 3: Python */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">Python</h6>
                                <h6 className="font-bold">80%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '80%' }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('python')}
                                onMouseOut={() => hideHiddenCard('python')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] z-10 rounded-lg shadow-md hidden"
                                id="python-hidden-card"
                            >
                                <h6 className="text-center">Python</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in Python programming language.</li>
                                    <li className="mb-1">Proficient in writing clean, maintainable, and efficient Python code.</li>
                                    <li className="mb-1">Experience in dealing with Data Structures and Algorithms using Python.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="w-full md:w-1/3 p-4">
                        {/* Skill 4: JavaScript */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">JavaScript</h6>
                                <h6 className="font-bold">75%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '75%' }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('javascript')}
                                onMouseOut={() => hideHiddenCard('javascript')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] z-10 rounded-lg shadow-md hidden "
                                id="javascript-hidden-card"
                            >
                                <h6 className="text-center">JavaScript</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in client-side scripting using JavaScript.</li>
                                    <li className="mb-1">Proficient in DOM manipulation, event handling, and asynchronous programming.</li>
                                    <li className="mb-1">Knowledge of modern JavaScript frameworks and libraries like React.js.</li>
                                    <li className="mb-1">Experience in developing interactive web applications and UI components using JavaScript.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Skill 5: React JS */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">React JS</h6>
                                <h6 className="font-bold">80%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '80%' }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('reactjs')}
                                onMouseOut={() => hideHiddenCard('reactjs')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] z-10 rounded-lg shadow-md hidden"
                                id="reactjs-hidden-card"
                            >
                                <h6 className="text-center">React JS</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in building user interfaces using React.js.</li>
                                    <li className="mb-1">Proficient in state management with Redux and context API.</li>
                                    <li className="mb-1">Knowledge of React hooks, functional components, and class components.</li>
                                    <li className="mb-1">Experience in integrating React with backend APIs to build full-stack applications.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Skill 6: ExpressJS */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">ExpressJS</h6>
                                <h6 className="font-bold">70%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '70%' }}
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('expressjs')}
                                onMouseOut={() => hideHiddenCard('expressjs')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] z-10 rounded-lg shadow-md hidden"
                                id="expressjs-hidden-card"
                            >
                                <h6 className="text-center">ExpressJS</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in building RESTful APIs using Express.js.</li>
                                    <li className="mb-1">Proficient in middleware integration and route handling.</li>
                                    <li className="mb-1">Knowledge of server-side rendering and API security practices.</li>
                                    <li className="mb-1">Experience in integrating Express.js with various databases.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-1/3 p-4">
                        {/* Skill 7: NodeJS */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">NodeJS</h6>
                                <h6 className="font-bold">70%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100]  rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '70%' }}
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('nodejs')}
                                onMouseOut={() => hideHiddenCard('nodejs')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] md:-translate-x-40 lg:translate-x-0 z-10 rounded-lg shadow-md hidden"
                                id="nodejs-hidden-card"
                            >
                                <h6 className="text-center">NodeJS</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in building server-side applications using Node.js.</li>
                                    <li className="mb-1">Proficient in asynchronous programming and event-driven architecture.</li>
                                    <li className="mb-1">Knowledge of Node.js ecosystem and package management with npm.</li>
                                    <li className="mb-1">Experience in integrating Node.js with various databases and external APIs.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Skill 8: MongoDB */}
                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">MongoDB</h6>
                                <h6 className="font-bold">65%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '65%' }}
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('mongodb')}
                                onMouseOut={() => hideHiddenCard('mongodb')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full md:w-[400px] md:-translate-x-40 lg:translate-x-0 z-10 rounded-lg shadow-md hidden "
                                id="mongodb-hidden-card"
                            >
                                <h6 className="text-center">MongoDB</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in using MongoDB for NoSQL database management.</li>
                                    <li className="mb-1">Proficient in creating and managing collections and documents.</li>
                                    <li className="mb-1">Knowledge of MongoDB aggregation framework and indexing strategies.</li>
                                    <li className="mb-1">Experience in integrating MongoDB with Node.js applications.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <div className="flex justify-between">
                                <h6 className="font-bold">REST API</h6>
                                <h6 className="font-bold">60%</h6>
                            </div>
                            <progress
                                className="bg-[#ff9100] rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full"
                                style={{ width: '60%' }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                onMouseOver={() => showHiddenCard('restapi')}
                                onMouseOut={() => hideHiddenCard('restapi')}
                            ></progress>
                            <div
                                className="absolute bg-[#ff9100] text-black p-2 w-full  md:w-[400px]  md:-translate-x-40 lg:translate-x-0 z-10 rounded-lg shadow-md hidden "
                                id="restapi-hidden-card"
                            >
                                <h6 className="text-center">REST API</h6>
                                <ul className="list-disc pl-5">
                                    <li className="mb-1">Experience in designing and implementing RESTful APIs.</li>
                                    <li className="mb-1">Proficient in HTTP methods, status codes, and API authentication.</li>
                                    <li className="mb-1">Knowledge of API documentation using tools like Postman.</li>
                                    <li className="mb-1">Experience in consuming and testing RESTful APIs from frontend applications.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
