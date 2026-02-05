import React from 'react';
import {
    TrendingDown,
    Banknote,
    LockKeyholeOpen,
    Handshake,
    TrendingUp,
    Percent
} from 'lucide-react'; // Using Lucide for clean icons

const Expertise = () => {
    const points = [
        {
            icon: <TrendingDown className="w-8 h-8 text-yellow-500" />,
            title: "Competitive rate of interest",
        },
        {
            icon: <Banknote className="w-8 h-8 text-yellow-500" />,
            title: "No document charges",
        },
        {
            icon: <LockKeyholeOpen className="w-8 h-8 text-yellow-500" />,
            title: "Branches open 7 days of the week",
        },
        {
            icon: <Handshake className="w-8 h-8 text-yellow-500" />,
            title: "Different schemes to customers",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
            title: "Higher Loan-to-Value ratio",
        },
        {
            icon: <Percent className="w-8 h-8 text-yellow-500" />,
            title: "Instant Gold Valuation",
        },
    ];

    return (
        <section className="py-16 px-4 bg-white font-sans">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 mb-2 relative inline-block">
                    Our Expertise & Strong Points
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
                </h2>
                <p className="text-slate-500 mt-6 text-lg">
                    Experience the best gold loan services with complete transparency
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {points.map((item, index) => (
                    <div
                        key={index}
                        className="group p-8 bg-white border border-yellow-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center outline outline-1 outline-yellow-400/20"
                    >
                        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 leading-tight max-w-[200px]">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;