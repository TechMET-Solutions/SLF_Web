import React from 'react';
import { HandHelping, Landmark, FileCheck, Zap } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon, isLast }) => (
    <div className="flex flex-col items-center text-center relative w-full group">
        {/* Connector Line (Desktop) */}
        {!isLast && (
            <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-yellow-200 -z-10" />
        )}

        {/* Icon Circle */}
        <div className="relative w-24 h-24 bg-[#fbb000] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Icon className="text-white w-10 h-10" />
            <div className="absolute -top-1 -right-1 bg-[#2c3338] text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
                {number}
            </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{desc}</p>
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
            desc: "Lunaswat Jewellers offer will accompany you to our partner bank",
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
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Four Easy <span className="border-b-4 border-yellow-400">Steps</span> For Gold Loan
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed italic">
                        A gold loan is the easiest way to fulfill your financial needs and proves to be a
                        sensible alternative to availing loans from banking channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 items-start">
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