"use client"; 

import { useState } from 'react';

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const showHiddenCard = (skill) => {
        setHoveredSkill(skill);
    };

    const hideHiddenCard = () => {
        setHoveredSkill(null);
    };

    const skills = [
        {
            name: 'HTML',
            percentage: 90,
            id: 'html',
            description: [
                'Hands-on experience with HTML by actively involving in projects.',
                'Skilled in creating well-structured, semantic HTML markup.',
                'Familiarity with HTML5 features and best practices.',
                'Proficient in HTML5 standards, integrating HTML with CSS and JavaScript.',
            ],
        },
        {
            name: 'CSS',
            percentage: 85,
            id: 'css',
            description: [
                'Experience in styling web pages using CSS.',
                'Familiarity with responsive design and CSS frameworks like Bootstrap.',
                'Proficient in CSS layout techniques and cross-browser compatibility.',
            ],
        },
        {
            name: 'Python',
            percentage: 80,
            id: 'python',
            description: [
                'Experience in Python programming language.',
                'Proficient in writing clean, maintainable, and efficient Python code.',
                'Experience in Data Structures and Algorithms using Python.',
            ],
        },
        {
            name: 'JavaScript',
            percentage: 75,
            id: 'javascript',
            description: [
                'Experience in client-side scripting using JavaScript.',
                'Proficient in DOM manipulation, event handling, and asynchronous programming.',
                'Knowledge of modern JavaScript frameworks and libraries like React.js.',
                'Experience in developing interactive web applications and UI components using JavaScript.',
            ],
        },
        {
            name: 'React JS',
            percentage: 80,
            id: 'reactjs',
            description: [
                'Experience in building user interfaces using React.js.',
                'Proficient in state management with Redux.',
                'Knowledge of React hooks, functional components, and class components.',
                'Experience in integrating React with backend APIs to build full-stack applications.',
            ],
        },
        {
            name: 'ExpressJS',
            percentage: 70,
            id: 'expressjs',
            description: [
                'Experience in building web applications and APIs using Express.js.',
                'Proficient in routing, middleware, and request handling in Express.js.',
                'Knowledge of templating engines like EJS.',
                'Experience in integrating Express.js with databases like MongoDB.',
            ],
        },
        {
            name: 'MongoDB',
            percentage: 70,
            id: 'mongodb',
            description: [
                'Experience in NoSQL database management using MongoDB.',
                'Proficient in CRUD operations, and indexing in MongoDB.',
                'Knowledge of Mongoose ORM for modeling and querying MongoDB data.',
                'Experience in integrating MongoDB with Node.js applications.',
            ],
        },
        {
            name: 'REST API',
            percentage: 70,
            id: 'restapi',
            description: [
                'Experience in designing and implementing RESTful APIs.',
                'Proficient in HTTP methods, status codes, and API authentication.',
                'Knowledge of API documentation using tools like Postman.',
                'Experience in consuming and testing RESTful APIs from frontend applications.',
            ],
        },
        {
            name: 'Node JS',
            percentage: 70,
            id: 'nodejs',
            description: [
                'Experience in server-side development using Node.js.',
                'Proficient in event-driven programming and non-blocking I/O in Node.js.',
                'Knowledge of Node.js frameworks like Express.js for building web applications.',
                'Experience in building scalable and efficient backend systems using Node.js.',
            ],
        },
    ];

    return (
        <>
            <div className=" justify-between  text-white" id="skills">
                <h1 className="text-4xl flex justify-center  font-bold mb-8">Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative w-90">

                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="relative mb-4 w-70 transition-transform  hover:scale-105"
                            onMouseEnter={() => showHiddenCard(skill.id)}
                            onMouseLeave={hideHiddenCard}
                        >
                            <div className="flex justify-between mb-2 ">
                                <h6 className="font-bold">{skill.name}</h6>
                                <h6 className="font-bold">{skill.percentage}%</h6>
                            </div>

                            {/* Progress bar */}
                            <div
                                className="w-full bg-gray-200 rounded-full h-4"
                                style={{
                                    backgroundColor: '#343a40',
                                    height: '17px',
                                    cursor: 'pointer',
                                }}
                            >
                                <div
                                    className=" h-4 rounded-full bg-[#adb5db] transition-colors duration-300 hover:bg-[#ff9100]"
                                    style={{
                                        width: `${skill.percentage}%`,
                                        height: '17px',
                                    }}
                                ></div>
                            </div>
                            {hoveredSkill === skill.id && (
                                <div
                                    className="absolute top-0 left-0 w-full bg-gray-100 shadow-lg rounded-lg mt-2 p-4 z-10"
                                    style={{ transform: 'translateY(-100%)', backgroundColor: '#ff9100' }}
                                >
                                    <h6 className="text-center font-bold text-black">{skill.name}</h6>
                                    <ul className="list-disc ml-4 text-black">
                                        {skill.description.map((desc, index) => (
                                            <li key={index} className="text-sm">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Skills;
