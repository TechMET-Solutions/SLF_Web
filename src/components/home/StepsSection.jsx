// // import React from 'react';
// // import { HandHelping, Landmark, FileCheck, Zap } from 'lucide-react';

// // const Step = ({ number, title, desc, icon: Icon, isLast }) => (
// //     <div className="flex flex-col items-center text-center relative w-full group px-2">
// //         {/* Connector Line (Desktop) */}
// //         {!isLast && (
// //             <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-yellow-200 -z-10" />
// //         )}

// //         {/* Icon Circle */}
// //         <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#fbb000] rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg transition-transform duration-300 group-hover:scale-105">
// //             <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />

// //             <div className="absolute -top-1 -right-1 bg-[#2c3338] text-white text-xs sm:text-sm font-bold w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 border-white">
// //                 {number}
// //             </div>
// //         </div>

// //         <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
// //             {title}
// //         </h3>

// //         <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-[180px] sm:max-w-[200px] md:max-w-[220px]">
// //             {desc}
// //         </p>
// //     </div>
// // );

// // const StepsSection = () => {
// //     const steps = [
// //         {
// //             number: 1,
// //             title: "Raise Request",
// //             desc: "Raise a request and schedule a visit at our branch",
// //             icon: HandHelping
// //         },
// //         {
// //             number: 2,
// //             title: "Bank Assistance",
// //             desc: "Lunawat Jewellers officer will accompany you to our partner bank",
// //             icon: Landmark
// //         },
// //         {
// //             number: 3,
// //             title: "KYC Verification",
// //             desc: "Simple documentation and gold assessment process",
// //             icon: FileCheck
// //         },
// //         {
// //             number: 4,
// //             title: "Instant Disbursal",
// //             desc: "Receive loan amount directly in your bank account",
// //             icon: Zap
// //         }
// //     ];

// //     return (
// //         <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
// //             <div className="max-w-7xl mx-auto">
// //                 {/* Heading */}
// //                 <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 px-2">
// //                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
// //                         Four Easy <span className="">Steps</span> For Gold Loan
// //                     </h2>

// //                     <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed italic">
// //                        A gold loan or a loan against gold is a secured loan which customers can avail from
// //  S Lunawat Jewellers Pvt Ltd in lieu of gold ornaments like gold jewellery. It is the easiest way to fulfil your financial needs and proves to be a sensible alternative to availing loans from banking channels.
// //                     </p>
// //                 </div>

// //                 {/* Steps Grid */}
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-4 items-start">
// //                     {steps.map((step, index) => (
// //                         <Step
// //                             key={index}
// //                             {...step}
// //                             isLast={index === steps.length - 1}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default StepsSection;import React from 'react';
// import { HandHelping, Landmark, FileCheck, Zap } from 'lucide-react';

// const Step = ({ number, title, desc, icon: Icon, isLast }) => (
//     <div className="flex flex-col items-center text-center relative w-full group">
//         {/* Connector Line (Desktop) - Adjusted top position to match center of icon */}
//         {!isLast && (
//             <div className="hidden lg:block absolute top-[48px] left-1/2 w-full h-[2px] bg-[#fbb000] -z-0 opacity-50" />
//         )}

//         {/* Icon Circle */}
//         <div className="relative z-10 w-24 h-24 bg-[#fbb000] rounded-full flex items-center justify-center mb-6 shadow-md">
//             <Icon className="text-white w-10 h-10" />
            
//             {/* Step Number Badge */}
//             <div className="absolute top-0 right-0 bg-[#2c3338] text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
//                 {number}
//             </div>
//         </div>

//         {/* Text Content */}
//         <h3 className="text-xl font-bold text-gray-900 mb-2">
//             {title}
//         </h3>

//         <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
//             {desc}
//         </p>
//     </div>
// );

// const StepsSection = () => {
//     const steps = [
//         {
//             number: 1,
//             title: "Raise Request",
//             desc: "Raise a request and schedule a visit at our branch.",
//             icon: HandHelping
//         },
//         {
//             number: 2,
//             title: "Bank Assistance",
//             desc: "Lunaswat Jewellers offer will accompany you to our partner bank.",
//             icon: Landmark
//         },
//         {
//             number: 3,
//             title: "KYC Verification",
//             desc: "Simple documentation and gold assessment process.",
//             icon: FileCheck
//         },
//         {
//             number: 4,
//             title: "Instant Disbursal",
//             desc: "Receive loan amount directly in your bank account.",
//             icon: Zap
//         }
//     ];

//     return (
//         <section className="bg-white py-24 px-6">
//             <div className="max-w-7xl mx-auto">
//                 {/* Heading Section */}
//                 <div className="text-center mb-20">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Four Easy steps For Gold Loan
//                     </h2>

//                     <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
//                         A gold loan or a loan against gold is a secured loan which customers can avail from
//                         S Lunawat Jewellers Pvt Ltd in lieu of gold ornaments like gold jewellery. It is the easiest
//                         way to fulfil your financial needs and proves to be a sensible alternative to availing loans
//                         from banking channels.
//                     </p>
//                 </div>

//                 {/* Steps Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-start">
//                     {steps.map((step, index) => (
//                         <Step
//                             key={index}
//                             {...step}
//                             isLast={index === steps.length - 1}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default StepsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { HandHelping, Landmark, FileCheck, Zap } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon, isLast, index }) => {
  // Animation variants for each step card
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col items-center text-center relative w-full group"
    >
      {/* Connector Line (Desktop) */}
      {!isLast && (
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
          className="hidden lg:block absolute top-[48px] left-1/2 w-full h-[2px] bg-[#fbb000] origin-left -z-0 opacity-30" 
        />
      )}

      {/* Icon Circle */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative z-10 w-24 h-24 bg-[#fbb000] rounded-full flex items-center justify-center mb-6 shadow-md cursor-pointer"
      >
        <Icon className="text-white w-10 h-10" />
        
        {/* Step Number Badge */}
        <div className="absolute top-0 right-0 bg-[#2c3338] text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          {number}
        </div>
      </motion.div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
        {desc}
      </p>
    </motion.div>
  );
};

const StepsSection = () => {
  const steps = [
    { number: 1, title: "Raise Request", desc: "Raise a request and schedule a visit at our branch.", icon: HandHelping },
    { number: 2, title: "Bank Assistance", desc: "Lunaswat Jewellers offer will accompany you to our partner bank.", icon: Landmark },
    { number: 3, title: "KYC Verification", desc: "Simple documentation and gold assessment process.", icon: FileCheck },
    { number: 4, title: "Instant Disbursal", desc: "Receive loan amount directly in your bank account.", icon: Zap }
  ];

  // Container variant to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Four Easy steps For Gold Loan
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            A gold loan or a loan against gold is a secured loan which customers can avail from
            S Lunawat Jewellers Pvt Ltd in lieu of gold ornaments like gold jewellery. It is the easiest 
            way to fulfil your financial needs and proves to be a sensible alternative to availing loans 
            from banking channels.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 items-start"
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              index={index}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;