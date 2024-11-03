import React, { useState } from 'react';
import { Exp } from './data2';

const Certificates = () => {
    const [showMore, setShowMore] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null); 

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const openCertificate = (certificateImg) => {
        setSelectedCertificate(certificateImg); 
    };

    const closeModal = () => {
        setSelectedCertificate(null);
    };

    // Function to handle outside click
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Certificates</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mx-auto p-4"> 
                {Exp &&
                    Exp.slice(0, showMore ? Exp.length : 3).map((n, index) => (
                        <div
                            key={index}
                            className="bg-cover bg-center rounded-3xl flex flex-col justify-end p-6 cursor-pointer"
                            style={{ backgroundImage: `url(${n.bgImg})`, height: '300px' }} 
                            onClick={() => openCertificate(n.certificateImg)}  
                        >
                            <div className="bg-white bg-opacity-75 p-4 rounded">
                                <p className="text-sm text-gray-700">{n.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
            {Exp.length > 3 && (
                <div className="mt-4 flex justify-center">
                    <button onClick={toggleShowMore} className="p-2 bg-gray-800 text-gray-400 rounded">
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
            {selectedCertificate && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal-overlay"
                    onClick={handleOutsideClick} 
                >
                    <div className="bg-white p-4 rounded-lg max-w-lg w-full relative">
                        <button 
                            onClick={closeModal} 
                            className="absolute top-2 right-2 text-gray-700"
                        >
                            ✖️
                        </button>
                        <h2 className="text-2xl font-bold text-center mb-4">Certificate</h2>
                        <img 
                            src={selectedCertificate} 
                            alt="Certificate" 
                            className="w-full h-auto rounded-md" 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;
