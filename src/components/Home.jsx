import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
    const [text] = useTypewriter({
        words: ['Vipin Rawat', 'A Developer', 'A Designer',],
        loop: {},
    });

    const navigate = useNavigate();
    
    const [isExpanded, setIsExpanded] = useState(false);

    const fullDescription = "I’m an aspiring AI/ML specialist, driven by a passion for machine learning projects. With experience in data analytics, NLP, and full-stack development, I focus on creating intuitive apps and data-driven solutions to efficiently solve complex real-world problems.";

    const truncatedDescription = `${fullDescription.substring(0, 100)}...`;

    return (
        <div className='mb-11 md:mb-6 md:mt-16 md:flex w-screen min-h-80 md:min-h-85 top-10 md:top-6 flex-row gap-30 relative' id='home'>  
            <Spline className='absolute'
                scene="https://prod.spline.design/srkgRox2hmNXJLf8/scene.splinecode" />
            <div className='absolute -mt-60 top-40 md:top-80'>
                <div>
                    <h1 className='mt-16 mb-5 md:mt-0 px-6 md:px-48 text-2xl md:text-5xl font-bold text-white'>
                        {"Hi I'm "}<br></br>
                        <span className='wrap text-3xl md:text-6xl text-purple-500'>{text}</span>
                        <Cursor />
                    </h1>
                    <p className='mr-40 md:mr-60  md:pr-64 px-4 md:px-48 text-xs text-justify md:text-xl text-white'>
                        {isExpanded ? fullDescription : truncatedDescription}
                        <span 
                            onClick={() => setIsExpanded(!isExpanded)} 
                            className='text-red-400 cursor-pointer'>
                            {isExpanded ? ' Read Less' : ' Read More'}
                        </span>
                    </p>
                    <button 
                        onClick={() => navigate('/resume')} // Use navigate instead of history.push
                        className='mt-4 inline-block md:ml-48 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'>
                        View Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
