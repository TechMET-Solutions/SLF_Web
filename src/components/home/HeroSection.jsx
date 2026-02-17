// import HeroSectionImage from "../../assets/hero.jpg";

// const HeroSection = () => {
//   return (
//     <section className="bg-[#fdfcf3] py-12 md:py-20 px-6 md:px-16 lg:px-24 min-h-[80vh] flex items-center">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Content Column */}
//         <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
//           <h1 className=" text-[55px] font-extrabold text-slate-900 leading-tight">
//             Get instant Gold Loan <br />
//             <span>with Complete Transparency</span>
//           </h1>

//           <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
//             Secure your gold and get instant cash with high loan-to-value ratio
//             and low interest rates. Fast disbursal, no hidden charges, and
//             complete safety.
//           </p>
//         </div>

//         {/* Right Image Column */}
//         <div className="relative order-1 lg:order-2 flex justify-center">
//           {/* Decorative Background Element */}
//           <div className="absolute -inset-4 bg-amber-100 rounded-[50px] rotate-3 -z-10 hidden md:block"></div>

//           <div className="rounded-[30px] md:rounded-[40px] w-full max-w-[500px] aspect-[4/5] overflow-hidden shadow-2xl">
//             <img
//               src={HeroSectionImage}
//               alt="Gold Loan Services"
//               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react';
import { motion } from 'framer-motion';
import HeroSectionImage from "../../assets/hero.jpg";

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-white py-16 md:py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fdfcf3] -z-10 clip-path-slant hidden lg:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column */}
        <motion.div 
          className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center self-center lg:self-start bg-[#fbb000]/10 border border-[#fbb000]/20 px-4 py-1.5 rounded-full">
            <span className="text-[#fbb000] text-xs font-bold uppercase tracking-[0.15em]">
              Trusted Gold Loan Provider
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-[60px] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Get instant Gold Loan <br className="hidden md:block" />
            <span className="text-[#fbb000] relative">
              with Complete Transparency
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#fbb000]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Secure your gold and get instant cash with high loan-to-value ratio 
            and low interest rates. Fast disbursal, no hidden charges, and 
            complete safety for your valuable assets.
          </motion.p>

          {/* Call to Actions */}
          {/* <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-[#fbb000] text-white px-10 py-4 rounded-lg font-bold shadow-lg shadow-yellow-500/30 hover:bg-[#e6a200] hover:-translate-y-1 transition-all duration-300">
              Apply For Loan
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-900 hover:text-white hover:-translate-y-1 transition-all duration-300">
              Check Schemes
            </button>
          </motion.div> */}
        </motion.div>

        {/* Right Image Column */}
        <motion.div 
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Image Container */}
          <div className="relative z-10 rounded-[40px] md:rounded-[60px] w-full max-w-[450px] aspect-[4/5] overflow-hidden shadow-2xl border-[12px] border-white">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={HeroSectionImage}
              alt="Gold Loan Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-60 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-50 rounded-full blur-2xl opacity-80 -z-10" />
          
          {/* Floating Feature Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 -left-8 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Interest Starting</p>
              <p className="text-xl font-bold text-gray-900">0.89% pm*</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;