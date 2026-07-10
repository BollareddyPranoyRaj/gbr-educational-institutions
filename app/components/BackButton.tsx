'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <button 
      onClick={() => router.back()} 
      aria-label="Go Back"
      className="fixed top-24 left-4 md:left-8 z-50 flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-md text-[#0B2046] rounded-full shadow-lg border border-gray-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 group"
    >
      <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
    </button>
  );
}
