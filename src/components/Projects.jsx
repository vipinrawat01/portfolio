import React, { useState } from 'react';
import project1 from "../images/stock.png";
import project2 from "../images/sql.png";
import project3 from "../images/mcq.png";
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';

const projects = [
    {
        img: project1,
        title: "Stock Price Prediction",
        description: "Designed and implemented a sophisticated machine learning model to predict stock prices for the next 5 days, leveraging historical financial data from 2010 onward. The model integrates advanced time series analysis techniques and is deployed using Streamlit, offering a user-friendly interface where users can select specific stocks and visualize projected trends. The app provides insightful data visualization and empowers investors with data-driven decision-making capabilities.",
        links: {
            site: "https://stock-price-prediction1.streamlit.app/",
            github: "https://github.com/vipinrawat01/Stock-Price-Prediction",
        },
    },
    {
        img: project2,
        title: "SQL Query Generator",
        description: "Developed a robust Natural Language Processing (NLP) tool that seamlessly translates user-friendly English queries into precise and efficient SQL statements. This project simplifies database management for non-technical users by making data querying accessible and intuitive, without the need to learn complex SQL syntax. The generator supports various query types and enhances productivity for data analysis and reporting tasks.",
        links: {
            site: "https://sqlquerygenerator01.streamlit.app/",
            github: "https://github.com/vipinrawat01/Sql_Query_Generator",
        },
    },
    {
        img: project3,
        title: "MCQs Generator",
        description: "Created an innovative Multiple-Choice Questions (MCQs) generator using NLP techniques, capable of analyzing text and extracting key information to formulate relevant questions and options. This system automates the question creation process for educators and e-learning platforms, significantly reducing time and effort spent on content preparation while ensuring high-quality and diverse question sets for assessments and training modules.",
        links: {
            site: "https://mcqsgenerator.onrender.com/",
            github: "https://github.com/vipinrawat01/mcqgenerator",
        },
    }
];

const Projects = () => {
    const [showMore, setShowMore] = useState(false);
    const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const toggleDescription = (index) => {
        if (expandedProjectIndex === index) {
            setExpandedProjectIndex(null);
        } else {
            setExpandedProjectIndex(index);
        }
    };

    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="projects">
            <h2 className='text-3xl font-bold text-gray-200 mb-8 text-center'>Projects</h2>
            {projects.slice(0, showMore ? projects.length : 2).map((project, index) => (
                <div key={index}
                    className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <img
                            src={project.img}
                            alt={project.title}
                            className='w-full h-full object-cover rounded-lg shadow-lg'
                        />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>
                            {expandedProjectIndex === index 
                                ? project.description 
                                : `${project.description.substring(0, 100)}...`}
                            <span 
                                onClick={() => toggleDescription(index)} 
                                className='text-red-400 cursor-pointer'>
                                {expandedProjectIndex === index ? ' Read Less' : ' Read More'}
                            </span>
                        </p>
                        <div className='flex space-x-4'>
                            <a href={project.links.site}
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition-duration-300'>View Site</a>
                            <a href={project.links.github}
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition-duration-300'><AiOutlineGithub /></a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Show More Button */}
            {projects.length > 2 && (
                <div className="mt-4 flex justify-center">
                    <button onClick={toggleShowMore} className="p-2 bg-gray-800 text-gray-400 rounded">
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Projects;
