// app/facilities/page.tsx

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Digital Classrooms",
      description: "Smart boards and digital learning tools integrated into our curriculum to make learning interactive, visual, and highly engaging.",
      icon: "💻"
    },
    {
      title: "Science & Computer Labs",
      description: "State-of-the-art laboratories equipped with modern apparatus to provide practical, hands-on experience in physics, chemistry, biology, and computer science.",
      icon: "🔬"
    },
    {
      title: "Extensive Library",
      description: "A well-stocked library featuring thousands of books, reference materials, encyclopedias, and periodicals to encourage a reading habit.",
      icon: "📚"
    },
    {
      title: "Sports Infrastructure",
      description: "Sprawling playgrounds for cricket, football, volleyball, and dedicated indoor facilities to ensure the physical well-being of our students.",
      icon: "⚽"
    },
    {
      title: "Safe Transport",
      description: "A fleet of well-maintained school buses covering extensive routes, equipped with GPS tracking via the GBR Parent App for absolute safety.",
      icon: "🚌"
    },
    {
      title: "Medical Room",
      description: "A fully equipped sick bay with trained medical staff available during school hours to attend to immediate first-aid needs.",
      icon: "🏥"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Campus Facilities</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          We provide a world-class infrastructure designed to foster academic excellence, creativity, and physical development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
              {facility.icon}
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              {facility.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}