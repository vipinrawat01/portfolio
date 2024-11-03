import React from 'react'
import { FaGithubSquare, FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1000] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-base mt-12'>
        <div className='space-y-4'>
            <h3 className='text-xl text-gray-200 font-semibold ml-20'> Vipin Rawat</h3>
            <div className=' flex flex-row gap-6 text-gray-100 ml-20 text-2xl'>
                <a href='#'><FaGithubSquare/></a>
                <a href='#'><FaInstagram/></a>
            </div>

        </div>
        <p className='text-gray-400 mr-20 mt-5'>@2024 Vipin Rawat</p>
      
    </div>

    
  )
}

export default Footer
