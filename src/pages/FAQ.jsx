import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero'

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="w-full py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left gap-4"
      onClick={onClick}
    >
      <span className="text-sm sm:text-base md:text-lg font-medium text-slate-700 leading-snug">
        {question}
      </span>

      <ChevronDown
        className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
    >
      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

const FAQSection = ({ icon, title, faqs, openIndex, setOpenIndex, offset }) => (
  <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
        <span className="text-2xl sm:text-3xl md:text-4xl">{icon}</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
          {title}
        </h2>
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {faqs.map((faq, index) => {
          const realIndex = offset + index;
          return (
            <FAQItem
              key={realIndex}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === realIndex}
              onClick={() => setOpenIndex(openIndex === realIndex ? null : realIndex)}
            />
          );
        })}
      </div>
    </div>
  </section>
);

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const baseFaqs = [
    {
      question: "What is Gold Loan?",
      answer:
        "A gold loan is a secured loan where customers provide gold ornaments as collateral. It is a quick way to get liquid cash for personal or business needs without extensive paperwork.",
    },
    {
      question: "What is Maximum loan amount I can get?",
      answer:
        "The maximum loan amount depends on the current market value of your gold and the purity of the ornaments. Typically, you can get up to 75% of the gold's value.",
    },
    {
      question: "How is the loan amount calculated?",
      answer:
        "We calculate the loan amount by weighing your gold ornaments (excluding stones) and verifying purity. The final value is based on the daily gold rate and the LTV (Loan-to-Value) ratio.",
    },
    {
      question: "What types of gold items do you accept?",
      answer:
        "We accept gold jewelry, ornaments, and coins with a purity range of 18k to 24k. Please note that we generally do not accept gold-plated items or very low-purity scrap.",
    },
    {
      question: "Personal Gold Loan",
      answer:
        "Our Personal Gold Loans are designed for immediate financial requirements with flexible repayment options and competitive interest rates.",
    },
  ];

  const sections = [
    { icon: '💰', title: 'Loan Basics', faqs: baseFaqs },
    { icon: '✓', title: 'Eligibility & Requirements', faqs: baseFaqs },
    { icon: '📊', title: 'Interest Rates & Charges', faqs: baseFaqs },
    { icon: '⚡', title: 'Loan Process & Disbursal', faqs: baseFaqs },
    { icon: '🔒', title: 'Gold Safety & Storage', faqs: baseFaqs },
    { icon: '💳', title: 'Repayment & Closure', faqs: baseFaqs },
  ];

  let offset = 0;

  return (
    <>
      <PageHero
        badge="FAQs"
        heading="Frequently Asked Questions"
        subtext="Find answers to all your questions about gold loans, our process, and services"
      />

      {sections.map((section, i) => {
        const currentOffset = offset;
        offset += section.faqs.length;

        return (
          <FAQSection
            key={i}
            icon={section.icon}
            title={section.title}
            faqs={section.faqs}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            offset={currentOffset}
          />
        );
      })}
    </>
  );
}

export default FAQ;