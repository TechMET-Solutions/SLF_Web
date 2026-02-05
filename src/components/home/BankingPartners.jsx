import React from 'react';
import CanaraBankLogo from '../../assets/canara-bank-logo.png'; // Replace with your local asset
import AxisBankLogo from '../../assets/axis-bank-logo.png'; 
import ICICIBankLogo from '../../assets/icici-bank-logo.png';
import DCBBankLogo from '../../assets/dcb-bank-logo.png';
import HDFCBankLogo from '../../assets/hdfc-bank-logo.png';


const BankingPartners = () => {
    const partners = [
        {
            name: "Canara Bank",
            logo: CanaraBankLogo,
            alt: "Canara Bank Logo"
        },
        {
            name: "Axis Bank",
            logo: AxisBankLogo,
            alt: "Axis Bank Logo"
        },
        {
            name: "ICICI Bank",
            logo: ICICIBankLogo,
            alt: "ICICI Bank Logo"
        },
        {
            name: "HDFC Bank",
            logo: HDFCBankLogo,
            alt: "HDFC Bank Logo"
        },
        {
            name: "DCB Bank",
            logo: DCBBankLogo,
            alt: "DCB Bank Logo"
        },
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-12">
                    Our Trusted Banking Partner
                </h2>

                {/* Logo Container */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img
                                src={partner.logo}
                                alt={partner.alt}
                                className="h-12 md:h-26 lg:h-32 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BankingPartners;