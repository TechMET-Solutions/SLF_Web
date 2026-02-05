import { CheckCircle2 } from "lucide-react";

export const SchemeCard = ({ title, icon: Icon, features }) => (
    <div className="bg-white rounded-2xl p-8 border border-yellow-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-slate-800 leading-tight max-w-[150px]">
                {title}
            </h3>
            <div className="bg-orange-50 p-3 rounded-xl">
                <Icon className="text-yellow-500 w-6 h-6" />
            </div>
        </div>

        <ul className="space-y-4 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{feature}</p>
                </li>
            ))}
        </ul>
    </div>
);