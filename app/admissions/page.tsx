import React from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Admissions | GBR Educational Institutions',
  description: 'Apply for admissions at GBR Institutions for the academic year 2026-2027.',
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      {/* Hero Section */}
      <div className="bg-[#0B2046] text-white py-20 px-6 md:px-12 text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-5xl font-bold font-serif max-w-4xl mx-auto leading-tight">
          Begin Your Journey With Us
        </h1>
        <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
          Admissions are now open for the 2026-2027 academic year across all GBR campuses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Info & Process */}
          <div className="w-full lg:w-5/12 space-y-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B2046] font-serif mb-6">Admissions Office</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-500 shrink-0 mt-1" size={24} />
                  <p>GBR Campus, Main Road, <br />Anaparthi, East Godavari, AP - 533342</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-500 shrink-0" size={24} />
                  <p>+91 8857 22xxxx / +91 9848x xxxxx</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-500 shrink-0" size={24} />
                  <p>admissions@gbr.edu.in</p>
                </div>
              </div>
            </div>

            {/* Admission Process */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B2046] font-serif mb-6">How to Apply</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-100 text-amber-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <h3 className="font-bold text-[#0B2046]">Submit Enquiry</h3>
                    <p className="text-sm text-gray-500 mt-1">Fill out the digital form with your basic details and program of interest.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-100 text-amber-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <h3 className="font-bold text-[#0B2046]">Campus Visit</h3>
                    <p className="text-sm text-gray-500 mt-1">Our counselors will contact you to schedule a campus tour and interaction.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-100 text-amber-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    3
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <h3 className="font-bold text-[#0B2046]">Enrollment</h3>
                    <p className="text-sm text-gray-500 mt-1">Submit required documents and fee to secure your seat for the academic year.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Application Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0B2046] font-serif mb-2">Online Enquiry Form</h2>
              <p className="text-gray-500 mb-8 text-sm">Fill out the form below and our admissions team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student&apos;s Full Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-gray-50 focus:bg-white"
                      placeholder="Enter student name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-gray-50 focus:bg-white"
                      placeholder="Enter parent name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-gray-50 focus:bg-white"
                      placeholder="+91"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-gray-50 focus:bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program of Interest *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-gray-50 focus:bg-white appearance-none" required>
                    <option value="" disabled selected>Select a program...</option>
                    <option value="school-primary">GBR Schools (Primary)</option>
                    <option value="school-high">GBR Schools (High School)</option>
                    <option value="inter-mpc">Junior College (MPC)</option>
                    <option value="inter-bipc">Junior College (BiPC)</option>
                    <option value="inter-cec">Junior College (CEC)</option>
                    <option value="degree">Degree College (B.Sc / B.Com / B.A)</option>
                    <option value="pg">PG College (MBA / MCA)</option>
                    <option value="bed">College of Education (B.Ed / D.Ed)</option>
                    <option value="nursing">Nursing College</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Any specific questions?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your educational background or requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0B2046] text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Submit Enquiry
                </button>
                
                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to allow GBR Institutions to contact you regarding admissions.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
