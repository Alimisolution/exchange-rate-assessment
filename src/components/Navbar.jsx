import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-center">
            <Link to="/" className="text-white">Home</Link>
        </nav>
    );
};

export default Navbar;
