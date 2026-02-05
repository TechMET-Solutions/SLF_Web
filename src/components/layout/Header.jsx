import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = ({ isActive }) =>
        `text-base lg:text-lg font-medium transition-colors ${isActive ? 'text-[#fbb000]' : 'text-slate-600 hover:text-[#fbb000]'
        }`;

    const navLinks = (
        <>
            <NavLink to="/" className={linkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/schemes" className={linkStyle} onClick={() => setIsOpen(false)}>Gold Loan Schemes</NavLink>
            <NavLink to="/faqs" className={linkStyle} onClick={() => setIsOpen(false)}>FAQs</NavLink>
            <NavLink to="/about" className={linkStyle} onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>Contact Us</NavLink>
        </>
    );

    return (
        <header className="bg-white shadow-sm py-3 sm:py-4 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-between items-center sticky top-0 z-50">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3">
                <img src={Logo} alt="logo" className="h-8 sm:h-9 md:h-10" />
                <div className="leading-none">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">S Lunawat</h1>
                    <p className="text-gray-600 text-xs sm:text-sm">Finance</p>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">{navLinks}</nav>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-md lg:hidden">
                    <nav className="flex flex-col items-center gap-4 py-6">{navLinks}</nav>
                </div>
            )}
        </header>
    );
};

export default Header;