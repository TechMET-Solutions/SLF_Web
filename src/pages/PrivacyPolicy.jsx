import React from 'react'
import PageHero from '../components/PageHero'

function PrivacyPolicy() {
    return (
        <>
            <PageHero
                heading="Privacy Policy"
                subtext="We are committed to protecting your personal information and your right to privacy."
            />

            <section className="py-16 px-4 bg-[#F9FAFB]">
                <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <div className="space-y-10 text-slate-700 leading-relaxed">

                        <p>
                            Please review our Privacy Policy, which also governs your visit to
                            <a href="https://slunawat.co.in" className="text-blue-600 font-medium hover:underline ml-1">
                                https://slunawat.co.in
                            </a>, to fully understand our practices.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Electronic Communication</h2>
                            <p>
                                When you visit <span className="font-semibold text-slate-900">https://slunawat.co.in/</span> or send e-mails to us, you are communicating with us electronically. By communicating with us, you consent to receive communication from us electronically. We will communicate with you by e-mail or by posting notices on our website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Prices</h2>
                            <p>
                                All prices posted on this website are subject to change without notice. Prices prevailing at commencement of placing the order will apply. Posted prices do not include convenience fee. In case there are any additional charges or taxes, the same will be mentioned on the website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment</h2>
                            <p>
                                All online payments on this website are processed securely through Cashfree Payments. We do not store or process any debit card, credit card, UPI, or net banking details on our servers. Cashfree Payments is PCI-DSS compliant and ensures secure payment processing.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes and Cancellation</h2>
                            <p>
                                Changes and cancellation are not allowed.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Refund</h2>
                            <p>
                                Refunds initiated will be credited to the account or card from where the transaction was initiated.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy 