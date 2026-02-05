import PageHero from '../components/PageHero'
import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle2
} from 'lucide-react';

function ContactUs() {
  // const contactMethods = [
  //   {
  //     icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  //     title: "Call Us",
  //     detail: "Toll Free: 1800-123-4567",
  //     subDetail: "Available 24/7",
  //   },
  //   {
  //     icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  //     title: "Email Us",
  //     detail: "info@slunawatfinance.com",
  //     subDetail: "Response within 24 hours",
  //   },
  //   {
  //     icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  //     title: "Business Hours",
  //     detail: "Mon - Sat: 9:00 AM - 6:00 PM",
  //     subDetail: "Sunday: Closed",
  //   },
  // ];

  return (
    <>
      <PageHero badge="Get in Touch" heading="Contact Us" subtext="Have questions? We're here to help! Reach out to us through any of the channels below." />

      {/* Contact Cards */}
      {/* <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center border border-gray-50"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#EAB308] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-yellow-200">
                {method.icon}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827] mb-2 sm:mb-3">
                {method.title}
              </h3>

              <p className="text-[#EAB308] font-bold text-sm sm:text-base md:text-lg mb-1">
                {method.detail}
              </p>

              <p className="text-[#64748B] text-xs sm:text-sm md:text-base font-medium">
                {method.subDetail}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Branch + Form */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16">

          {/* Left Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-slate-900">Visit Our Branches</h2>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 mb-10 sm:mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#EAB308] mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Nashik (Head Office)</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    S Lunawat Finance Pvt. Ltd<br />
                    318 Nehru Road, Bhagur, Nashik<br />
                    Maharashtra 422502
                  </p>

                  <div className="space-y-2 sm:space-y-3 mt-4">
                    <div className="flex items-center gap-3 text-slate-600 text-xs sm:text-sm">
                      <Phone size={16} className="text-[#EAB308]" /> +91 22 1234-5678
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-xs sm:text-sm">
                      <Mail size={16} className="text-[#EAB308]" /> nashik@slunawatfinance.com
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-xs sm:text-sm">
                      <Clock size={16} className="text-[#EAB308]" /> Mon-Sat: 9:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-slate-900">Follow Us</h2>
              <div className="flex gap-3 sm:gap-4">
                {[<Facebook />, <Twitter />, <Instagram />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-600 shadow-md border border-gray-50 hover:text-[#EAB308] transition-colors"
                  >
                    {React.cloneElement(icon, { size: 22 })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-50">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Send Us a Message</h2>

            <div className="flex items-center gap-2 text-green-600 mb-6 sm:mb-8 text-xs sm:text-sm font-medium">
              <CheckCircle2 size={18} /> We respond within 24 hours
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-bold mb-2 text-slate-800">Full Name</label>
                <input type="text" className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold mb-2 text-slate-800">Email Address</label>
                <input type="email" className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold mb-2 text-slate-800">Message</label>
                <textarea rows="5" className="w-full p-3 sm:p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              </div>

              <button className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold py-3 sm:py-4 rounded-xl transition-all shadow-lg shadow-yellow-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactUs