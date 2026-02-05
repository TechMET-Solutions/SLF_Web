import React from 'react';

const PageHero = ({ badge, heading, subtext }) => {
    return (
        <section className="py-20 px-4 bg-[#FFFCF5]"> {/* Slight off-white/cream background as per image */}
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Badge */}
                <div className="bg-[#FFB800] text-black text-sm font-semibold px-6 py-2 rounded-xl mb-4 shadow-sm">
                    {badge}
                </div>

                {/* Heading with Underline */}
                <div className="relative mb-8">
                    <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
                        {heading}
                    </h2>
                    <div className="w-40 h-1.5 bg-[#FFB800] mx-auto rounded-full"></div>
                </div>

                {/* Subtext */}
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                   {subtext}
                </p>

            </div>
        </section>
    );
};

export default PageHero;