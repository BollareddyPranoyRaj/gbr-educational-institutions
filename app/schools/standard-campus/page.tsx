// app/schools/standard-campus/page.tsx
import React from 'react';
import { Sun, Trophy, Shield, Wind, Users } from 'lucide-react';

export const metadata = {
  title: 'Standard Campus | GBR English Medium Schools',
  description: 'Traditional, highly ventilated campus focusing on rigorous academics and holistic development at GBR Schools.',
};

export default function StandardCampusPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      {/* Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden border-b-[6px] border-amber-500">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-amber-400/30">
            <Sun size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            The Standard Campus
          </h1>
          <p className="text-amber-400 mt-4 text-xl font-medium tracking-wide uppercase">
            High School & Holistic Development
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            Our traditional, highly ventilated campus focusing on rigorous academic standards, unwavering discipline, and extensive physical development.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden shrink-0 border-4 border-amber-500 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Mr. Venkat Reddy - Headmaster" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-2">Mr. Venkat Reddy</h2>
            <p className="text-amber-600 text-lg font-semibold mb-4">Headmaster, Standard Campus</p>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              &ldquo;True education extends far beyond the four walls of a classroom. Our Standard Campus is built on the philosophy of rigorous discipline, natural energy, and active participation. We mold resilient, strong-willed individuals ready to face the world.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition duration-300">
            <Wind className="mx-auto text-amber-500 mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#0B2046] mb-3">Highly Ventilated</h3>
            <p className="text-gray-500 text-sm">Spacious, open-air corridor designs that ensure constant fresh air circulation and abundant natural sunlight.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition duration-300">
            <Trophy className="mx-auto text-amber-500 mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#0B2046] mb-3">Massive Playgrounds</h3>
            <p className="text-gray-500 text-sm">Extensive outdoor facilities dedicated to cricket, volleyball, athletics, and daily physical conditioning.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition duration-300">
            <Shield className="mx-auto text-amber-500 mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#0B2046] mb-3">Gurukul Discipline</h3>
            <p className="text-gray-500 text-sm">A structured environment focusing on punctuality, respect, character building, and academic rigor.</p>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Cinematic Grid) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Inside the Standard Campus</h2>
          <p className="text-gray-500">A visual tour of our expansive high school grounds and facilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
          
          {/* Main Sports Focus */}
          <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1544252874-51e88e3914a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Extensive Playgrounds" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-bold text-white font-serif mb-2">Expansive Sports Grounds</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Fostering teamwork, physical fitness, and competitive spirit through daily organized sports.
              </p>
            </div>
          </div>

          {/* Corridors */}
          <div className="relative group overflow-hidden rounded-2xl md:col-span-2 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ventilated Corridors" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-xl font-bold text-white font-serif mb-1">Naturally Ventilated Architecture</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100 line-clamp-2">
                Wide open spaces and corridors that encourage fresh air circulation and vibrant student interactions.
              </p>
            </div>
          </div>

          {/* Classroom Interaction */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Active Classrooms" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-lg font-bold text-white font-serif mb-1">Active Learning</h3>
              <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Spacious setups that promote direct teacher-student engagement.
              </p>
            </div>
          </div>

          {/* Assembly / Discipline */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Morning Assembly" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-lg font-bold text-white font-serif mb-1">Morning Assemblies</h3>
              <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Instilling discipline and unity to start every academic day strong.
              </p>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}
