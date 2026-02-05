import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import Logo from '../../assets/logo.png';

const Header = () => {
    const linkStyle = ({ isActive }) =>
        `text-lg font-medium transition-colors ${isActive ? 'text-[#fbb000]' : 'text-slate-600 hover:text-[#fbb000]'}`;

    return (
        <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <img src={Logo} alt="logo" className="h-10" />
                <div>
                    <h1 className="text-2xl font-bold text-black leading-none">S Lunawat</h1>
                    <p className="text-gray-600 text-sm">Finance</p>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-10">
                <NavLink to="/" className={linkStyle}>Home</NavLink>
                <NavLink to="/schemes" className={linkStyle}>Gold Loan Schemes</NavLink>
                <NavLink to="/faqs" className={linkStyle}>FAQs</NavLink>
                <NavLink to="/about" className={linkStyle}>About Us</NavLink>
                <NavLink to="/contact" className={linkStyle}>Contact Us</NavLink>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
                <Button>Apply Now</Button>
            </div>
        </header>
    );
};

export default Header;