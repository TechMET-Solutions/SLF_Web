import React from 'react';
import { HandHelping, Landmark, FileCheck, Zap } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon, isLast }) => (
    <div className="flex flex-col items-center text-center relative w-full group px-2">
        {/* Connector Line (Desktop) */}
        {!isLast && (
            <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-yellow-200 -z-10" />
        )}

        {/* Icon Circle */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#fbb000] rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />

            <div className="absolute -top-1 -right-1 bg-[#2c3338] text-white text-xs sm:text-sm font-bold w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 border-white">
                {number}
            </div>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
            {title}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-[180px] sm:max-w-[200px] md:max-w-[220px]">
            {desc}
        </p>
    </div>
);

const StepsSection = () => {
    const steps = [
        {
            number: 1,
            title: "Raise Request",
            desc: "Raise a request and schedule a visit at our branch",
            icon: HandHelping
        },
        {
            number: 2,
            title: "Bank Assistance",
            desc: "Lunawat Jewellers officer will accompany you to our partner bank",
            icon: Landmark
        },
        {
            number: 3,
            title: "KYC Verification",
            desc: "Simple documentation and gold assessment process",
            icon: FileCheck
        },
        {
            number: 4,
            title: "Instant Disbursal",
            desc: "Receive loan amount directly in your bank account",
            icon: Zap
        }
    ];

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 px-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Four Easy <span className="border-b-4 border-yellow-400">Steps</span> For Gold Loan
                    </h2>

                    <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed italic">
                        A gold loan is the easiest way to fulfill your financial needs and proves to be a
                        sensible alternative to availing loans from traditional banking channels.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-4 items-start">
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            {...step}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;