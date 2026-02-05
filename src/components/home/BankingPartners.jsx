import React from 'react';
import CanaraBankLogo from '../../assets/canara-bank-logo.png';
import AxisBankLogo from '../../assets/axis-bank-logo.png';
import ICICIBankLogo from '../../assets/icici-bank-logo.png';
import DCBBankLogo from '../../assets/dcb-bank-logo.png';
import HDFCBankLogo from '../../assets/hdfc-bank-logo.png';

const BankingPartners = () => {
    const partners = [
        { name: "Canara Bank", logo: CanaraBankLogo, alt: "Canara Bank Logo" },
        { name: "Axis Bank", logo: AxisBankLogo, alt: "Axis Bank Logo" },
        { name: "ICICI Bank", logo: ICICIBankLogo, alt: "ICICI Bank Logo" },
        { name: "HDFC Bank", logo: HDFCBankLogo, alt: "HDFC Bank Logo" },
        { name: "DCB Bank", logo: DCBBankLogo, alt: "DCB Bank Logo" },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                    Our Trusted Banking Partner
                </h2>

                {/* Logos Grid */}
                <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-full h-full p-3 sm:p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.alt}
                                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BankingPartners;