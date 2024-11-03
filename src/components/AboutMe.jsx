import React from 'react';
import pass from '../images/IMG_0597.JPG';

const AboutMe = () => {
  return (
    <div className='bg-black relative'id = 'aboutme'>
      <div className='w-full h-[370px] grid grid-cols-1 md:grid-cols-2 md:gap-4'>
        
        {/* Image Box */}
        <div className='-mt-14 md:mt-16 w-full h-[370px] flex items-center justify-center'>
          <div className='md:mr-24 w-[190px] h-[200px] md:w-[275px] md:h-[300px] bg-purple-500 rounded-md relative'>
            <img
              className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl'
              src={pass}
              alt="A personal image" // Adding alt text for accessibility
            />
          </div>    
        </div>

        {/* Content Box */}
        <div className='px-6 md:pr-48 mt-40 absolute md:mt-8 md:relative w-full h-[420px] flex flex-col items-center justify-center'>
          <h3 className='text-gray-200 text-2xl mb-4'>About Me</h3>
          <p className='bg-black md:text-lg text-xs text-textBase text-justify'>
            I’m an AI/ML enthusiast pursuing my MCA at Chandigarh University, specializing in AI and Machine Learning with a CGPA of 8.57. I’ve developed projects like a Stock Price Prediction model, an NLP-based SQL Query Generator, and an automated MCQ Generator. My internships at CodSoft and Pinnacle Labs involved creating models for Titanic survival prediction and credit card fraud detection. I hold certifications in Python Programming and Data Analytics from IBM and aim to leverage AI to create impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
