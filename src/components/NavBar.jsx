import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { AiOutlineDownload } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link } from 'react-router-dom'; 
const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <nav className='w-full px-6 md:px-44 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
                <div className='w-full md:w-full bg-gray-900 p-4 rounded-3xl flex items-center'> {/* Changed to a darker blue */}
                    <p className='text-lg text-slate-200 font-medium'>Vipin Rawat</p>

                    <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
                        <ScrollLink 
                            to='home'
                            className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink 
                            to='aboutme'
                            smooth={true}
                            duration={500}
                            className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                        >
                            About
                        </ScrollLink>
                        <ScrollLink 
                            to='skills'
                            smooth={true}
                            duration={500}
                            className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                        >
                            Skills
                        </ScrollLink>
                        <ScrollLink 
                            to='projects'
                            smooth={true}
                            duration={500}
                            className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                        >
                            Projects
                        </ScrollLink>
                        <ScrollLink 
                            to='contacts'
                            smooth={true}
                            duration={500}
                            className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                        >
                            Contacts
                        </ScrollLink>
                        <a 
                            href='/resume.pdf' // Change this to the path of your resume file
                            download // Adds download functionality
                            className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'
                        >
                            <AiOutlineDownload className='inline mr-1' /> Download Resume
                        </a>
                    </div>

                    <div className='block md:hidden ml-auto cursor-pointer' onClick={() => setIsActive(!isActive)}>
                        <IoMenu className='text-2xl text-textBase' />
                    </div>

                    {isActive && (
                        <div className='p-4 w-245 bg-blue-800 rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'> {/* Changed to a slightly darker blue for the dropdown */}
                            <Link 
                                to='home'
                                className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                                onClick={() => setIsActive(false)}
                            >
                                Home
                            </Link>
                            <ScrollLink 
                                to='aboutme'
                                smooth={true}
                                duration={500}
                                className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                                onClick={() => setIsActive(false)}
                            >
                                About
                            </ScrollLink>
                            <ScrollLink 
                                to='projects'
                                smooth={true}
                                duration={500}
                                className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                                onClick={() => setIsActive(false)}
                            >
                                Projects
                            </ScrollLink>
                            <ScrollLink 
                                to='contacts'
                                smooth={true}
                                duration={500}
                                className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                                onClick={() => setIsActive(false)}
                            >
                                Contacts
                            </ScrollLink>
                            <a 
                                href='/resume.pdf' // Change this to the path of your resume file
                                download // Adds download functionality
                                className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'
                                onClick={() => setIsActive(false)}
                            >
                                <AiOutlineDownload className='inline mr-1' /> Download Resume
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
