import React from 'react'
import PageHero from '../components/PageHero'

function GoldLoanSchemes() {
  const schemes = [
    { name: "Personal Gold Loan", duration: "6-12 Months", ltv: "75%", interest: "1.00%" },
    { name: "Business Gold Loan", duration: "6-12 Months", ltv: "75%", interest: "1.00%" },
    { name: "Gold Jewellery Loan", duration: "6-12 Months", ltv: "75%", interest: "1.00%" },
    { name: "Agricultural Gold Loan", duration: "6-12 Months", ltv: "75%", interest: "1.00%" },
    { name: "Premium Gold Loan", duration: "6-12 Months", ltv: "75%", interest: "1.00%" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        badge="Our Loan Products" 
        heading="Gold Loan Schemes" 
        subtext="Choose from our wide range of gold loan schemes tailored to meet your specific needs. All schemes come with transparent pricing, no hidden charges, and flexible repayment options." 
      />
      <div className='bg-[#F9FAFB]'>
         <section className="max-w-6xl mx-auto px-4 py-16 bg-[#F9FAFB]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Compare Our Schemes</h2>
          <p className="text-gray-500">Quick comparison of all our gold loan schemes to help you make the right choice.</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1C252E] text-white">
                <th className="p-4 font-medium">Scheme Name</th>
                <th className="p-4 font-medium text-center">Duration</th>
                <th className="p-4 font-medium text-center">LTV</th>
                <th className="p-4 font-medium text-center">Interest Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schemes.map((scheme, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">{scheme.name}</td>
                  <td className="p-4 text-center text-gray-600">{scheme.duration}</td>
                  <td className="p-4 text-center text-gray-600">{scheme.ltv}</td>
                  <td className="p-4 text-center font-bold text-yellow-600">{scheme.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
</div>
     
    </div>
  )
}

export default GoldLoanSchemes