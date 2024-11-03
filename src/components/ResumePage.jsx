import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'; 
import Res from '../images/resume.jpg'; 

const ResumePage = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-900 min-h-screen mt-16"> {/* Add mt-16 to create space below the navbar */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl relative">
                {/* Back Icon */}
                <button onClick={handleBackClick} className="absolute top-4 left-4 text-gray-800 text-2xl">
                    <IoArrowBack /> {/* Back arrow icon */}
                </button>

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Resume</h2>
                <img 
                    src={Res} 
                    alt="Resume Not Found" 
                    className="w-full h-auto rounded-md" 
                />
            </div>
        </div>
    );
};

export default ResumePage;
