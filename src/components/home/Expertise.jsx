import {
    Handshake,
    LockKeyholeOpen,
    Percent,
    TrendingDown,
    TrendingUp,
} from "lucide-react";

const Expertise = () => {
  const points = [
    {
      icon: (
        <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
      ),
      title: "Competitive rate of interest",
    },
    {
      icon: (
        <Banknote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
      ),
      title: "No document charges",
    },
    {
      icon: (
        <LockKeyholeOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
      ),
      title: "Branches open 7 days of the week",
    },
    {
      icon: (
        <Handshake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
      ),
      title: "Different schemes for customers",
    },
    {
      icon: (
        <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
      ),
      title: "Higher Loan-to-Value ratio",
    },
    {
      icon: (
        <Percent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500" />
      ),
      title: "Instant Gold Valuation",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#F9FAFB] font-sans">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 relative inline-block leading-tight">
          Our Expertise & Strong Points
          {/* <span className="block mx-auto mt-3 w-16 sm:w-20 md:w-24 h-1 bg-yellow-400 rounded-full"></span> */}
        </h2>

        <p className="text-slate-500 mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto">
          Experience the best gold loan services with complete transparency.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {points.map((item, index) => (
          <div
            key={index}
            className="group p-5 sm:p-6 md:p-8 bg-white border border-yellow-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center outline outline-1 outline-yellow-400/20"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-700 leading-snug max-w-[180px] sm:max-w-[200px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
