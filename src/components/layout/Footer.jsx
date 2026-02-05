import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1F2933] text-gray-300 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 font-sans">
            {/* Top Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

                {/* Brand Section */}
                <div className="space-y-4 flex flex-col items-start">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="logo" className="h-8 sm:h-9 md:h-10" />
                        <div>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-none">S Lunawat</h1>
                            <p className="text-gray-100 text-xs sm:text-sm">Finance</p>
                        </div>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed max-w-xs">
                        RBI Registered NBFC providing secure and transparent gold loan services since 1994.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-yellow-500 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/schemes" className="hover:text-white transition">Gold Loan Schemes</a></li>
                        <li><a href="/faqs" className="hover:text-white transition">FAQs</a></li>
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-yellow-500 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Resources</h3>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                        <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="/terms-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
                        <li><a href="/refund-cancellation-policy" className="hover:text-white transition">Refund & Cancellation Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">RBI Guidelines</a></li>
                        <li><a href="#" className="hover:text-white transition">Fair Practice Code</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-yellow-500 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact Us</h3>

                    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                        <div className="flex gap-3">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                            <p>
                                S Lunawat Finance Pvt. Ltd<br />
                                318 Nehru Road, Bhagur, Nashik<br />
                                Maharashtra 422502
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                            <p>
                                <span className="font-bold text-white">Phone:</span> 9420406611 <br />
                                <span className="sm:ml-6 text-gray-300">9420406622</span>
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                            <p>
                                <span className="font-bold text-white">Email:</span> slf.bhagur@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center md:text-left">
                <p className="text-[10px] sm:text-xs text-gray-500">
                    © 2023 S Lunawat Finance Pvt. Ltd. All Rights Reserved.
                </p>

                <p className="text-[10px] sm:text-xs text-gray-500">
                    Design & Developed By: TechMET IT Solutions Pvt. Ltd.
                </p>
            </div>
        </footer>
    );
};

export default Footer;