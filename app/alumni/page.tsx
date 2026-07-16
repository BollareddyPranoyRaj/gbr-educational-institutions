// app/alumni/page.tsx

export default function AlumniPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Alumni Network</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Connecting past students, celebrating their achievements, and fostering a lifelong bond with the GBR community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6">Stay Connected</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            Our alumni are our greatest pride, representing GBR Schools across various esteemed professions globally. We invite all former students to join the official Alumni Association to network, mentor current students, and attend exclusive reunions.
          </p>
          <form className="space-y-4">
            <h3 className="font-medium text-primary border-b border-gray-200 pb-2 mb-4">Register for the Alumni Directory</h3>
            <div>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Batch Year (e.g. 2018)" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main text-sm" />
              <input type="text" placeholder="Current Profession" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main text-sm" />
            </div>
            <div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white text-text-main text-sm" />
            </div>
            <button type="button" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-medium text-sm mt-2">
              Join Network
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary mb-6">Alumni Spotlights</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 shadow-sm">
            <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0 flex items-center justify-center border border-gray-300">
               <span className="text-xs text-gray-500">Photo</span>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Dr. Vikram Reddy</h4>
              <p className="text-xs text-accent mb-2">Class of 2012 • Medical Professional</p>
              <p className="text-sm text-text-muted leading-relaxed">&quot;The foundational years at GBR taught me the discipline and compassion required to succeed in the medical field.&quot;</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-4 shadow-sm">
            <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0 flex items-center justify-center border border-gray-300">
               <span className="text-xs text-gray-500">Photo</span>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Priya Sharma</h4>
              <p className="text-xs text-accent mb-2">Class of 2015 • Software Engineer</p>
              <p className="text-sm text-text-muted leading-relaxed">&quot;The early exposure to logical thinking and computer labs at the A.C. Campus sparked my passion for technology.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
