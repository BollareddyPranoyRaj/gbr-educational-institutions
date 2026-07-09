// app/junior-college/page.tsx
import React from 'react';
import { Microscope, Calculator, Landmark, Target, Award, Beaker } from 'lucide-react';

export const metadata = {
  title: 'GBR Junior College | Intermediate Education',
  description: 'Top-tier Intermediate education in MPC, BiPC, and CEC streams with integrated competitive coaching for EAMCET, NEET, and JEE.',
};

export default function JuniorCollegePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-16">
      <div className="bg-[#0B2046] text-white py-20 px-6 md:px-12 text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-5xl font-bold font-serif max-w-4xl mx-auto leading-tight">
          GBR Junior College
        </h1>
        <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
          Laying the strongest foundation for higher education and professional success through rigorous Intermediate streams.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B2046] font-serif">Academic Streams Offered</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose your specialized path. We provide intensive curriculum delivery combined with integrated coaching for state and national level entrance examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              <Calculator size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">M.P.C</h3>
            <p className="text-sm text-gray-500 font-semibold mb-4">Mathematics, Physics, Chemistry</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The premier choice for aspiring engineers and architects. Includes rigorous analytical training and advanced problem-solving techniques.
            </p>
            <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 font-medium">
              Integrated Coaching: <span className="text-[#0B2046] font-bold">JEE (Mains) & AP EAPCET</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition group">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition">
              <Microscope size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">Bi.P.C</h3>
            <p className="text-sm text-gray-500 font-semibold mb-4">Biology, Physics, Chemistry</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Tailored for future medical professionals, agricultural experts, and biotechnologists. Features extensive practical laboratory sessions.
            </p>
            <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 font-medium">
              Integrated Coaching: <span className="text-[#0B2046] font-bold">NEET & AP EAPCET</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition group">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition">
              <Landmark size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">C.E.C</h3>
            <p className="text-sm text-gray-500 font-semibold mb-4">Civics, Economics, Commerce</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Designed for students aiming for careers in chartered accountancy, business management, law, and civil services.
            </p>
            <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 font-medium">
              Pathway Focus: <span className="text-[#0B2046] font-bold">CA Foundation & UG Commerce</span>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 opacity-5 rounded-bl-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold text-[#0B2046] font-serif mb-4">The GBR Advantage</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our intermediate program is strictly structured to minimize distractions and maximize academic output. We bridge the gap between board examinations and highly competitive entrance tests.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Beaker className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <span className="block font-semibold text-gray-900">Advanced Laboratories</span>
                    <span className="text-sm text-gray-500">Fully equipped Physics, Chemistry, and Botany/Zoology labs for hands-on practical experience.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <span className="block font-semibold text-gray-900">Weekly Assessment Cycle</span>
                    <span className="text-sm text-gray-500">Continuous evaluation through weekend slip tests and grand tests modeled on final exam patterns.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <span className="block font-semibold text-gray-900">Proven Track Record</span>
                    <span className="text-sm text-gray-500">Decades of consistent state-level ranks and high distinction pass percentages.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 h-full min-h-[300px] rounded-xl border border-gray-200 flex items-center justify-center p-6 text-center">
               <div className="text-gray-400 font-medium">
                 [Image Placeholder: Junior College Students in Chemistry Lab]
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}