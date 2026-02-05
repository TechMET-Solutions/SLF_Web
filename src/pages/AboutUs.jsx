// import React from 'react'
// import PageHero from '../components/PageHero'

// function AboutUs() {
//   return (
//     <>
//       <PageHero badge="Our Story" heading="About Us" subtext="Three decades of trust, transparency, and customer-first service in the gold loan industry" />
//     </>
//   )
// }

// export default AboutUs

import React from 'react'
import PageHero from '../components/PageHero'
import { Eye, Target, ShieldCheck, Users, Gem, Handshake } from 'lucide-react'

const LeaderCard = ({ name, role, description }) => (
  <div className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm">
    <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 mb-6 flex items-center justify-center bg-gray-50">
      {/* Placeholder for Profile Image */}
    </div>
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-[#fbb000] font-semibold text-sm mb-4">{role}</p>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-4 border border-gray-50">
      <Icon className="text-[#fbb000] w-6 h-6" />
    </div>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

function AboutUs() {
  return (
    <div className="bg-[#F9FAFB]">
      <PageHero 
        badge="Our Story" 
        heading="About Us" 
        subtext="Three decades of trust, transparency, and customer-first service in the gold loan industry" 
      />

      {/* Leadership Section */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Leadership</h2>
          <p className="text-gray-500 italic">Meet the visionaries behind S Lunawat Finance</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <LeaderCard 
            name="Shantilal K Lunawat" 
            role="30+ Years in Finance" 
            description="Visionary leader with extensive experience in the gold loan industry, driving growth and excellence." 
          />
          <LeaderCard 
            name="Sandeep S Lunawat" 
            role="Director" 
            description="Strategist focused on providing seamless customer experiences and operational efficiency across branches." 
          />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-[#fbb000] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-sm shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[#fbb000] w-6 h-6" />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be the most trusted and customer-centric gold loan provider, setting industry benchmarks for transparency and excellence in the financial services sector.
            </p>
          </div>
          <div className="bg-white p-10 rounded-sm shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#fbb000] w-6 h-6" />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide instant, hassle-free gold loans with maximum transparency and integrity, empowering individuals and businesses to meet their financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Core Values</h2>
          <p className="text-gray-500 italic">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard icon={ShieldCheck} title="Transparency" desc="Complete openness in all our dealings, pricing, and processes for lasting trust." />
          <ValueCard icon={Users} title="Customer First" desc="Every decision we make starts with how it benefits our customers and simplifies their life." />
          <ValueCard icon={Gem} title="Integrity" desc="Building long-term relationships through honesty and ethical financial practices." />
          <ValueCard icon={Handshake} title="Trustworthy" desc="Your gold is secured with high-level protection, giving you peace of mind." />
        </div>
      </section>
    </div>
  )
}

export default AboutUs