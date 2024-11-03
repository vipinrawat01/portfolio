import React from 'react'
const contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contacts'>
        <div className='grid md:grid-cols-2 place-items-center'>
            <div>
                <div className='text-gray-100 my-3'>
                    <h3 className='text-4xl font-semibold mb-5'>About<span className='text-purple-600'> Me</span></h3>
                    <p className='text-justify leading-7 w-11/12 mx-auto'>
                    I’m an AI/ML enthusiast pursuing my MCA at Chandigarh University. My projects include a Stock Price Prediction model and an NLP-based SQL Query Generator. I hold certifications in Python Programming and Data Analytics from IBM.

I’d love to connect! Please reach out through the form below to discuss ideas or opportunities in AI and machine learning.
                    </p>
                </div>
                <div className='flex mt-10 items-center gap-7'>
                    <div className=' bg-gray-800/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>11
                            <span className='text-purple-600'>+</span>
                        </h3>
                        <p className='text-xs md:text-base'><span className='text-purple-600'>Projects</span></p>
                    </div>
                </div>


            </div>
            <form
                action="https://getform.io/f/alljjwoa"
                method="POST"
                className='max-w-6xl p-5 md:p-12'
                id='form'>

                <p className='text-gray-100 font-bold text-xl mb-2'>
                    Let's Connect
                </p>
                <input
                    type="text"
                    id="name"
                    placeholder="Your Name ..."
                    name="name"
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Your Email ..."
                    name="email"
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                />
                <textarea
                    type="textarea"
                    id="textarea"
                    cols="30"
                    rows="4"
                    placeholder="Your Message..."
                    className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                />
                <button
                    type="submit"
                    className='w-full rounded-md border text-gray-100 font-semibold text-xl bg-primary-color'
                >
                    Send Message
                </button>

            </form>
        </div>
    </div>
  )
}

export default contact
