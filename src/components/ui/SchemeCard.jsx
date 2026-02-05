import { CheckCircle2 } from "lucide-react";

export const SchemeCard = ({ title, icon: Icon, features }) => (
    <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-yellow-100 shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 sm:mb-5 md:mb-6 gap-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug sm:leading-tight max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
                {title}
            </h3>

            <div className="bg-orange-50 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl flex-shrink-0">
                <Icon className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 sm:space-y-4 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="text-green-500 w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        {feature}
                    </p>
                </li>
            ))}
        </ul>
    </div>
);