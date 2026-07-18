// app/academics/page.tsx
import React from 'react';

export default function AcademicsAndLifePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Academics & School Life
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive guidelines, schedules, and award systems designed to nurture holistic development and academic excellence.
          </p>
        </div>

        {/* Timings Section - REDESIGNED */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">🕒</span>
            School Timings & Appointments
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Class Timings */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#b8860b] flex items-center gap-2">
                Class Timings
              </h3>
              <div className="space-y-3">
                <TimingCard label="Nursery (EMS)" time="9:00 AM – 12:00 PM" />
                <TimingCard label="Pre-Primary & Primary (EMS & AC)" time="9:00 AM – 4:10 PM" />
                <TimingCard label="High School (EMS & AC)" time="8:00 AM – 5:30 PM" />
              </div>
            </div>

            {/* Office & Meetings */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#b8860b] flex items-center gap-2">
                Office & Meetings
              </h3>
              <div className="space-y-3">
                <TimingCard label="School Office Hours" subtext="Monday to Saturday" time="9:00 AM – 5:00 PM" />
                <TimingCard label="Meeting the Dean" subtext="Monday to Saturday (Prior Appt.)" time="10:30 AM – 12:00 PM" />
                <TimingCard label="Meeting the Teacher" subtext="2nd Saturday of the month" time="9:00 AM – 12:00 PM" />
              </div>
            </div>
          </div>
        </section>

        {/* Assessment & Promotion - REDESIGNED */}
        <section className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">📝</span>
            Assessment, Examination & Promotion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <RuleItem text="Promotions are granted on the basis of the whole year's work. The final examination is not a promotion examination; regular attendance and steady work are crucial." />
              <RuleItem text="Four Formative Assessments and two Summative Assessments are conducted throughout the year." />
            </div>
            <div className="space-y-4">
              <RuleItem text="Pupils absent for an examination without a significant reason will be marked absent and will not be re-examined." />
              <RuleItem text="All promotions and detentions are decided after careful consideration, and the Principal's decision is final and binding." />
              <RuleItem text="Use of unfair means during tests will be dealt with severely." isWarning />
            </div>
          </div>
        </section>

        {/* Path to Success (Awards) - REDESIGNED */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-sm">🏆</span>
            Path to Success: Award System
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grades 1-5 */}
            <div className="bg-[#789c4a]/5 rounded-xl p-6 border border-[#789c4a]/20">
              <h3 className="font-bold text-xl mb-6 text-[#5b7a35]">Grades 1 - 5</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AwardBadge title="Star of the Month" desc="Performed well overall." />
                <AwardBadge title="Sweet Kid Award" desc="Nice to everyone." />
                <AwardBadge title="Good Samaritan" desc="Helpful to teachers/peers." />
                <AwardBadge title="Sunshine Kid" desc="Always bright and cheerful." />
                <AwardBadge title="Hang in There" desc="Doing better / improving." />
                <AwardBadge title="High Academic" desc="Academic excellence." />
              </div>
            </div>

            {/* Grades 6-9 */}
            <div className="bg-[#e6c755]/10 rounded-xl p-6 border border-[#e6c755]/30">
              <h3 className="font-bold text-xl mb-6 text-[#9a8020]">Grades 6 - 9</h3>
              <div className="space-y-4">
                <AwardRow title="Leadership Award" desc="Good motivator, empowers others to achieve goals." />
                <AwardRow title="Interpersonal Sensitivity" desc="Sensitive to needs of others, works well with teams." />
                <AwardRow title="Quality Orientation" desc="Meticulous approach, ensures quality standards are met." />
                <AwardRow title="Action Orientation" desc="Initiates projects and is always ready to make decisions." />
              </div>
            </div>
          </div>
        </section>

        {/* Rules, Uniform & Parent Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Rules */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">General Discipline</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-primary">•</span> Carry the school diary every day.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Move in corridors in perfect silence.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Communicate strictly in <strong>ENGLISH</strong>.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Arrive 15 mins early if using own transport.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> No sharp objects or electronic gadgets.</li>
            </ul>
          </div>

          {/* Uniform & Leaves */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Uniform & Leaves</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-primary">•</span> Proper, clean uniform is mandatory.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Boys: short hair. Girls: 2 plaits with white bands if hair is long.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> No fancy watches, ornaments, or nail polish.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> <strong>75% attendance</strong> required for promotion.</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Prior Principal permission for personal leaves.</li>
            </ul>
          </div>

          {/* Parents */}
          <div className="bg-primary text-white rounded-2xl p-6 shadow-sm lg:col-span-1 flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              👨‍👩‍👧‍👦 Recommendation to Parents
            </h3>
            <p className="text-sm text-white/90 mb-4 leading-relaxed">
              The calendar serves as a vital bridge between teachers, students, and parents. Please review it regularly and ensure homework is completed.
            </p>
            <p className="text-sm text-white/90 leading-relaxed">
              We encourage you to foster English conversation at home to support your child's academic growth.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

/* --- Reusable UI Components for this page --- */

function TimingCard({ label, subtext, time }: { label: string; subtext?: string; time: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl border border-gray-200">
      <div className="mb-2 sm:mb-0 pr-4">
        <p className="font-semibold text-gray-800">{label}</p>
        {subtext && <p className="text-xs text-gray-500 mt-0.5">{subtext}</p>}
      </div>
      <div className="shrink-0">
        <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-bold text-primary shadow-sm">
          {time}
        </span>
      </div>
    </div>
  );
}

function RuleItem({ text, isWarning = false }: { text: string; isWarning?: boolean }) {
  return (
    <div className="flex gap-3 items-start">
      <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${isWarning ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
        {isWarning ? '!' : '✓'}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function AwardBadge({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
      <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
      <p className="text-xs text-gray-500 leading-snug">{desc}</p>
    </div>
  );
}

function AwardRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
      <span className="font-bold text-gray-800 text-sm whitespace-nowrap min-w-[160px]">{title}</span>
      <span className="text-sm text-gray-600">{desc}</span>
    </div>
  );
}