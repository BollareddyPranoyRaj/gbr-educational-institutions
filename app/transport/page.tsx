// app/transport/page.tsx
import React from 'react';
import { Bus, MapPin, ShieldCheck, Users, AlertCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Transport Facilities | GBR Educational Institutions',
  description: 'Extensive and safe transport network covering Anaparthi, Rajahmundry, and 40+ surrounding villages.',
};

// You can easily edit these village names with your exact route data
const routesData = [
  {
    hub: "Rajahmundry & Urban Route",
    villages: ["Rajahmundry City", "Morampudi", "Bommuru", "Dowleswaram", "Vemagiri", "Kadiyam", "Kadiyapulanka"]
  },
  {
    hub: "Mandapeta & Surroundings",
    villages: ["Mandapeta", "Alamuru", "Jonada", "Arthamuru", "Tapeshwaram", "Dwarapudi", "Medapadu"]
  },
  {
    hub: "Ramachandrapuram Route",
    villages: ["Ramachandrapuram", "Draksharamam", "Hasanbada", "Kota", "Vella", "Choppella", "Yanam (Border)"]
  },
  {
    hub: "Biccavolu & Rural Network",
    villages: ["Biccavolu", "Illapalli", "Balabhadrapuram", "Penumarthi", "Komaripalem", "Tossipudi", "G. Mamidada"]
  },
  {
    hub: "Anaparthi Local & Borders",
    villages: ["Anaparthi (All colonies)", "Kutukuluru", "Polamuru", "Ramavaram", "Mahendrawada", "Koppavaram", "Pedaparthi"]
  },
  {
    hub: "Samalkot Route",
    villages: ["Samalkot", "Peddapuram", "Vetlapalem", "G. Medapadu", "Bhimavaram", "Unduru", "Kirlampudi"]
  }
];

export default function TransportPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* 1. Cinematic Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden border-b-[6px] border-amber-500">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-amber-400/30">
            <Bus size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            Transport Network
          </h1>
          <p className="text-amber-400 mt-4 text-xl font-medium tracking-wide uppercase">
            Connecting 40+ Villages
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            A reliable, extensive, and highly secure fleet ensuring your child&apos;s daily commute is comfortable and safe.
          </p>
        </div>
      </div>

      {/* 2. Real Safety Protocols */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-4">Our Safety Commitment</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We take the responsibility of your child&apos;s daily commute seriously with strict operational protocols.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-[#0B2046] mb-2">Speed Governors</h3>
            <p className="text-sm text-gray-500">Every bus is equipped with speed limiters to ensure strictly controlled, safe driving speeds at all times.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-[#0B2046] mb-2">Bus Attendants</h3>
            <p className="text-sm text-gray-500">Dedicated support staff on board to assist young students with boarding, seating, and de-boarding safely.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <AlertCircle size={24} />
            </div>
            <h3 className="font-bold text-[#0B2046] mb-2">Experienced Drivers</h3>
            <p className="text-sm text-gray-500">Our fleet is operated only by verified, highly experienced drivers with flawless local route knowledge.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-[#0B2046] mb-2">Designated Stops</h3>
            <p className="text-sm text-gray-500">Fixed, secure pickup and drop-off points planned meticulously to minimize walk time for students.</p>
          </div>
        </div>
      </section>

      {/* 3. The 40+ Villages Grid */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0B2046] mb-4">Extensive Route Coverage</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Connecting rural and urban landscapes to ensure no student misses out on quality education due to distance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routesData.map((route, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <MapPin className="text-amber-500" size={24} />
                  <h3 className="font-bold text-xl text-[#0B2046]">{route.hub}</h3>
                </div>
                <ul className="space-y-3">
                  {route.villages.map((village, vIndex) => (
                    <li key={vIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-amber-400 font-bold mt-0.5">•</span> 
                      {village}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-gray-400 text-sm italic mt-4">
                    <span className="text-gray-300 font-bold mt-0.5">+</span> 
                    and nearby hamlets...
                  </li>
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Helpdesk / CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="bg-[#0B2046] text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full"></div>
          
          <Phone className="mx-auto text-amber-500 mb-6" size={48} />
          <h2 className="text-3xl font-bold font-serif mb-4">Need Transport Details?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            If you do not see your specific village listed, or if you need exact pickup timings and fee structures, our Transport Manager is ready to help.
          </p>
          
          <Link 
            href="/admissions" 
            className="inline-flex items-center gap-2 bg-amber-500 text-[#0B2046] px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition shadow-lg"
          >
            Contact Transport Office
          </Link>
        </div>
      </section>

    </main>
  );
}