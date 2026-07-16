// app/ac-campus/page.tsx

export default function ACCampusPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">A.C. Campus</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Experience our world-class, fully air-conditioned campus designed for optimal learning and comfort.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* These will be replaced with your Cloudinary images/videos later */}
        <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl h-64 flex items-center justify-center shadow-sm">
          <span className="text-text-muted">Campus Image 1</span>
        </div>
        <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl h-64 flex items-center justify-center shadow-sm">
          <span className="text-text-muted">Campus Image 2</span>
        </div>
        <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl h-64 flex items-center justify-center shadow-sm">
          <span className="text-text-muted">Campus Image 3</span>
        </div>
      </div>
    </main>
  );
}