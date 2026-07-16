// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">About GBR Schools</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          A legacy of academic excellence, holistic development, and shaping the global citizens of tomorrow.
        </p>
      </div>

      <div className="space-y-16">
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl h-80 flex items-center justify-center shadow-sm relative overflow-hidden">
              <span className="text-gray-400 font-medium">School Building Image</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Legacy</h2>
            <p className="text-text-muted leading-relaxed text-sm">
              Established with a singular vision to provide quality education, GBR Schools has carved a niche for itself in a remarkably short span of time. We believe that an educational institution is not just a place of learning, but a crucible where character is forged and futures are shaped.
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              Our pedagogical approach is rooted in Indian value systems while seamlessly incorporating the best of modern global knowledge paradigms. We ensure our students receive an education that is learner-centered, supportive, and completely stress-free.
            </p>
          </div>
        </section>

        <section className="bg-primary/5 border border-primary/10 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-accent mb-2">15+</h3>
              <p className="text-primary font-medium">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-accent mb-2">2000+</h3>
              <p className="text-primary font-medium">Happy Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-accent mb-2">100%</h3>
              <p className="text-primary font-medium">Pass Results</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
