import React from 'react';
import HeroSectionImage from '../../assets/hero.jpg';

const HeroSection = () => {
    return (
        <section className="bg-[#fdfcf3] py-12 md:py-20 px-6 md:px-16 lg:px-24 min-h-[80vh] flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Column */}
                <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                        Get instant Gold Loan <br />
                        <span className="text-amber-600">with Complete Transparency</span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Secure your gold and get instant cash with high loan-to-value ratio and low interest rates.
                        Fast disbursal, no hidden charges, and complete safety.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
                            Apply Now
                        </button>
                        <button className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
                            Check Eligibility
                        </button>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="relative order-1 lg:order-2 flex justify-center">
                    {/* Decorative Background Element */}
                    <div className="absolute -inset-4 bg-amber-100 rounded-[50px] rotate-3 -z-10 hidden md:block"></div>

                    <div className="rounded-[30px] md:rounded-[40px] w-full max-w-[500px] aspect-[4/5] overflow-hidden shadow-2xl">
                        <img
                            src={HeroSectionImage}
                            alt="Gold Loan Services"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;