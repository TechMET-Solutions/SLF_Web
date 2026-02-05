import { Crown, RefreshCw, Zap } from "lucide-react";
import { SchemeCard } from "../ui/SchemeCard";

const GoldSchemes = () => {
  const schemes = [
    {
      title: "S Lunawat Max",
      icon: Crown,
      features: [
        "Monthly Interest.",
        "Pay only monthly interest and principal amount at loan closure.",
        "Instant approval within 30 minutes.",
      ],
    },
    {
      title: "S Lunawat Delight",
      icon: Zap,
      features: [
        "Single repayment.",
        "Pay only monthly interest and principal amount at loan closure.",
        "Instant approval within 30 minutes.",
      ],
    },
    {
      title: "S Lunawat Flexi",
      icon: RefreshCw,
      features: [
        "Overdraft on gold.",
        "Pay monthly interest as per usage.",
        "Instant approval within 30 minutes.",
      ],
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Our Gold Loan Schemes
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mt-3 sm:mt-4">
            Choose from our range of flexible gold loan schemes designed to meet
            your specific needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {schemes.map((scheme, index) => (
            <div key={index} className="w-full h-full">
              <SchemeCard {...scheme} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldSchemes;
