import React from 'react';

const Button = ({ children, onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-[#fbb000] hover:bg-[#e6a000] text-black font-bold py-3 px-8 rounded-xl transition-all duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;