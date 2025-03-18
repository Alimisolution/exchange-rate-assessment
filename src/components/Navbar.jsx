import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="bg-gray-800 px-5 md:px-20 py-4 flex justify-between items-center">
            <div>
                <h1 className='text-white font-semibold text-xl md:text-3xl'>Excahnge</h1>
            </div>
            <div className='hidden md:flex gap-8'>
                <Link to="/" className="text-white">Home</Link>
                <Link to="/about" className="text-white">About </Link>
            </div>
            <button className='block md:hidden text-white text-2xl' onClick={() => setToggle(toggle => !toggle)}>&#x2630;</button>
            
            <div className={`${toggle ? "left-0" : " left-[-100%] "} md:hidden gap-4 absolute top-0 transition-all duration-300 bg-gray-800 w-[60%] z-20 h-screen flex flex-col pt-5 px-3`}>
                <Link to="/" className="text-white text-xl">Home</Link>
                <Link to="/about" className="text-white text-xl">About </Link>
            </div>
        </nav>
    );
};

export default Navbar;
