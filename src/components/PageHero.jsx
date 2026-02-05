import React from 'react';

const PageHero = ({ badge, heading, subtext }) => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-[#FFFCF5]">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Badge */}
                <div className="bg-[#FFB800] text-black text-xs sm:text-sm font-semibold px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl mb-3 sm:mb-4 shadow-sm">
                    {badge}
                </div>

                {/* Heading with Underline */}
                <div className="relative mb-6 sm:mb-8 px-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                        {heading}
                    </h2>

                    <div className="w-20 sm:w-28 md:w-36 lg:w-40 h-1 sm:h-1.5 bg-[#FFB800] mx-auto rounded-full"></div>
                </div>

                {/* Subtext */}
                <p className="text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed px-2">
                    {subtext}
                </p>

            </div>
        </section>
    );
};

export default PageHero;