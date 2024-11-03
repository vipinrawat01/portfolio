import React from 'react'
import {DiHtml5,DiCss3,DiPython,DiMongodb,DiMysql,DiReact,DiJavascript1} from "react-icons/di"
import {SiKotlin} from "react-icons/si"

const skills = [
    {
        category: 'Languages',
        technologies: [
            { name:'HTML', icon: <DiHtml5 className='text-orange-600'/>},
            { name:'CSS', icon: <DiCss3 className='text-blue-600'/>},
            { name:'JavaScript', icon: <DiJavascript1 className='text-yellow-500'/>},
            { name:'React', icon: <DiReact className='text-blue-600'/>},
            { name:'MySql', icon: <DiMysql className='text-red-700'/>},
            { name:'Python', icon: <DiPython className='text-blue-400'/>},
            { name:'Kotlin', icon: <SiKotlin className='text-blue-400'/>},
            { name:'Mongodb', icon: <DiMongodb className='text-blue-400'/>},
        ],
    }
]

const Skills = () => {
    
  return (
    <div className='max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>  
        <h2 className='pt-16 text-3xl font-bold mb-4 text-center'>Skills</h2>
        <p className='text-lg text-center mb-8'>
        I worked on various machine learning and data analysis projects, along with some Android and Web development. Check them <a href='#' className='underline'>there</a>
        </p>

        <div className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-8 '>
            {skills.map((skills, index) => (
                <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full'>
                    
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-7'>
                        {skills.technologies.map((tech, idx) =>(
                            <div key={idx} className='flex items-center space-x-2'>
                                <span className='text-3xl'>{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>    
    </div>
  )
}

export default Skills
