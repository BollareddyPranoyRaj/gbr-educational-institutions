// app/nursing/page.tsx
import React from 'react';
import { HeartPulse, Activity, Syringe, BookOpen, Award, Stethoscope } from 'lucide-react';

export const metadata = {
  title: 'Nursing College | GBR Educational Institutions',
  description: 'Top-tier healthcare education, clinical training, and nursing programs at GBR.',
};

export default function NursingCollegePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* 1. Cinematic Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden border-b-[6px] border-rose-500">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-rose-400/30">
            <HeartPulse size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            GBR College of Nursing
          </h1>
          <p className="text-rose-300 mt-4 text-xl font-medium tracking-wide uppercase">
            B.Sc Nursing • GNM
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            Shaping compassionate, highly skilled healthcare professionals through rigorous academic curriculum and extensive hands-on clinical training.
          </p>
        </div>
      </div>

      {/* 2. The Local Leader: Principal's Message */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden shrink-0 border-4 border-rose-500 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Dr. M. Sunitha - Principal" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-2">Dr. M. Sunitha</h2>
            <p className="text-rose-600 text-lg font-semibold mb-4">Principal, College of Nursing</p>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              &ldquo;Nursing is an art and a science that demands unwavering dedication and profound empathy. At GBR, we provide state-of-the-art simulation labs and partner with leading multi-specialty hospitals to ensure our students graduate not just with a degree, but with the clinical confidence to save lives and transform healthcare.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Programs (Cards Layout instead of a dense table) */}
      <section className="bg-white py-20 px-6 md:px-12 border-y border-gray-100 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Academic Programs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Approved by the Indian Nursing Council (INC) and State Nursing Council.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* B.Sc Nursing Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:-translate-y-1 transition duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2046] font-serif mb-2">B.Sc Nursing</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">A comprehensive 4-year undergraduate program designed to prepare students to assume responsibilities as professional, competent nurses and midwives.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
                  <span className="font-bold text-[#0B2046] w-24">Duration:</span> 4 Years
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
                  <span className="font-bold text-[#0B2046] w-24">Eligibility:</span> 10+2 (BiPC) with minimum 45% marks.
                </div>
              </div>
            </div>

            {/* GNM Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:-translate-y-1 transition duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                <Syringe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2046] font-serif mb-2">GNM</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">General Nursing and Midwifery (GNM) is a 3-year diploma program focusing on the provision of care to individuals, families, and communities.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
                  <span className="font-bold text-[#0B2046] w-24">Duration:</span> 3 Years
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
                  <span className="font-bold text-[#0B2046] w-24">Eligibility:</span> 10+2 in any stream (Science preferred).
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Clinical Training & Infrastructure (Cinematic Bento Grid) */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0B2046] mb-4">Clinical Excellence</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bridging theory and practice with advanced in-house laboratories and extensive multi-specialty hospital rotations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
            
            {/* Simulation Labs (Large Tile) */}
            <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Nursing Simulation Lab" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-2xl font-bold text-white font-serif mb-2">Advanced Simulation Labs</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Practice complex medical procedures safely on high-fidelity patient mannequins before entering real hospital environments.
                </p>
              </div>
            </div>

            {/* Hospital Rotations (Wide Tile) */}
            <div className="relative group overflow-hidden rounded-2xl md:col-span-2 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1584982751601-97d883866814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Hospital Training" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Clinical Rotations</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100 line-clamp-2">
                  Direct hands-on experience in ICU, ER, and Maternity wards at our partnered multi-specialty hospitals.
                </p>
              </div>
            </div>

            {/* Anatomy Labs (Small Tile) */}
            <div className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Anatomy Labs" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold text-white font-serif mb-1">Anatomy & Physiology</h3>
                <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Fully equipped labs for foundational biological sciences.
                </p>
              </div>
            </div>

            {/* Community Health (Small Tile) */}
            <div className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Community Health" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold text-white font-serif mb-1">Community Health</h3>
                <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Rural and urban outreach programs for holistic medical training.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
