import React from 'react';
import { Crown, Zap, RefreshCw } from 'lucide-react';
import { SchemeCard } from '../ui/SchemeCard';

const GoldSchemes = () => {
    const schemes = [
        {
            title: "S Lunawat Max",
            icon: Crown,
            features: [
                "Monthly Interest.",
                "Pay Only monthly Interest and Principle amount at loan closure.",
                "Instant approval within 30 minutes."
            ]
        },
        {
            title: "S Lunawat Delight",
            icon: Zap,
            features: [
                "Single Repayment.",
                "Pay Only monthly Interest and Principle amount at loan closure.",
                "Instant approval within 30 minutes."
            ]
        },
        {
            title: "S Lunawat Flexi",
            icon: RefreshCw,
            features: [
                "Overdraft on Gold.",
                "Pay monthly Interest and as per usage.",
                "Instant approval within 30 minutes."
            ]
        }
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Our Gold Loan Schemes
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose from our range of flexible gold loan schemes designed to meet your specific needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {schemes.map((scheme, index) => (
                        <SchemeCard key={index} {...scheme} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoldSchemes;