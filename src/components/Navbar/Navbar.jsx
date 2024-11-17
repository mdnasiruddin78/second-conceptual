import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='min-h-20 bg-blue-950 flex justify-between items-center text-white p-5'>
            <div className='text-xl font-bold'>TEETH WIZERD</div>
            <div className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/alltreatment">All Treatments</NavLink>
                <NavLink to="/myappoinment">My Appoinment</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/login" className='btn'>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;