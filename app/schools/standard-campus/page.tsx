'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Trophy, Shield, Wind, Award, MapPin } from 'lucide-react';
import Link from 'next/link';

// NOTE: Metadata must be moved to layout.tsx or a separate server component since this is a Client Component
// export const metadata = {
//   title: 'Standard Campus | GBR English Medium Schools',
//   description: 'Traditional, highly ventilated campus focusing on rigorous academics and holistic development at GBR Schools.',
// };

const topScorers = [
  { name: "A. Venkat", marks: "598/600", badge: "State Topper", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "M. Deepika", marks: "595/600", badge: "District 1st", img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "K. Rohan", marks: "592/600", badge: "School Topper", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "S. Priya", marks: "589/600", badge: "Math Perfect", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "V. Karthik", marks: "588/600", badge: "Science Perfect", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "R. Anjali", marks: "585/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "P. Tarun", marks: "584/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "N. Sowmya", marks: "582/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "B. Akhil", marks: "580/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "G. Lakshmi", marks: "579/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

export default function StandardCampusPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (topScorers.length - 2));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* 1. Hero Section */}
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

      {/* 2. Leadership Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20 mt-20">
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

      {/* 3. 10th Board Top Scorers */}
      <section className="bg-[#0B2046] py-20 text-white overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">10th Board Top Scorers</h2>
            <p className="text-amber-400 text-lg">Setting new academic benchmarks year after year.</p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 1.5}rem))` }}
            >
              {topScorers.map((student, idx) => (
                <div key={idx} className="w-full md:w-[calc(33.333%-1rem)] shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center shadow-lg">
                  <div className="w-24 h-24 mx-auto rounded-full bg-white mb-4 overflow-hidden border-2 border-amber-400">
                    <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-xl font-serif text-white">{student.name}</h4>
                  <p className="font-semibold mb-3 text-amber-400">{student.marks}</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium text-white">
                    <Award size={16} className="text-amber-400" /> {student.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Features */}
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

      {/* 5. Inside the Standard Campus (Academic & Indoor) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Inside the Standard Campus</h2>
          <p className="text-gray-500">A look into our academic corridors and disciplined environment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
          <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Active Classrooms" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-bold text-white font-serif mb-2">Active Learning Classrooms</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Spacious setups that promote direct teacher-student engagement and rigorous academic focus.
              </p>
            </div>
          </div>

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

          <div className="relative group overflow-hidden rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Library" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-lg font-bold text-white font-serif mb-1">Reading Rooms</h3>
              <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Quiet zones dedicated to deep study and board exam preparation.
              </p>
            </div>
          </div>

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

      {/* 6. NEW: Outdoor & Sports Infrastructure */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Outdoor & Sports Infrastructure</h2>
            <p className="text-gray-500">A sprawling campus equipped with professional-grade sporting facilities and event arenas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* High School Building */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm h-72">
              <img 
                src="https://images.unsplash.com/photo-1599058917216-560bf973e86c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="High School Building Exterior" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Main Campus Building</h3>
                <p className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition duration-500">Expansive, traditional architecture.</p>
              </div>
            </div>

            {/* Cricket Ground */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm h-72">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cricket Ground" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Cricket Ground</h3>
                <p className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition duration-500">Dedicated pitch for tournaments.</p>
              </div>
            </div>

            {/* Volleyball Court */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm h-72">
              <img 
                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Volleyball Court" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Volleyball Court</h3>
                <p className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition duration-500">Professional net setups.</p>
              </div>
            </div>

            {/* Football Court */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm h-72">
              <img 
                src="https://images.unsplash.com/photo-1518605368461-1ee7e53c19b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Football Court" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Football Field</h3>
                <p className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition duration-500">Massive open field for athletics.</p>
              </div>
            </div>

            {/* Tennis Court */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm h-72">
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tennis Court" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Tennis / Badminton Courts</h3>
                <p className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition duration-500">Hard courts for racquet sports.</p>
              </div>
            </div>

            {/* Event Stage */}
            <div className="group relative overflow-hidden rounded-2xl shadow-sm h-72">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Open-Air Event Stage" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Open-Air Event Stage</h3>
                <p className="text-amber-400 text-sm opacity-0 group-hover:opacity-100 transition duration-500">For cultural fests and annual days.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}