// app/student-life/page.tsx

export default function StudentLifePage() {
  const activities = [
    {
      category: "Sports & Athletics",
      description: "From track and field to team sports like cricket, football, and basketball, we encourage physical fitness, teamwork, and healthy competition.",
      icon: "🏃"
    },
    {
      category: "Arts & Culture",
      description: "Students can explore their creative potential through classical dance, vocal music, painting, pottery, and drama clubs.",
      icon: "🎨"
    },
    {
      category: "Debate & Literature",
      description: "Fostering articulate and confident speakers through regular debates, elocution competitions, and the school magazine editorial board.",
      icon: "🎤"
    },
    {
      category: "Eco Club",
      description: "Sensitizing students to the environment through tree planting drives, waste management projects, and nature walks.",
      icon: "🌱"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Student Life & Co-Curriculars</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Education at GBR Schools extends far beyond the classroom. We offer a vibrant array of activities to discover and nurture every child&apos;s unique talents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl bg-primary/5 p-4 rounded-lg border border-primary/10">
              {activity.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">{activity.category}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">The House System</h2>
        <p className="text-text-muted text-sm max-w-3xl mx-auto leading-relaxed mb-8">
          To promote leadership, loyalty, and a spirit of healthy competition, students are divided into four houses. Regular inter-house competitions in academics, sports, and cultural events are held throughout the academic year.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="px-6 py-2 bg-red-100 text-red-800 border border-red-200 rounded-full font-medium shadow-sm">Ruby House</span>
          <span className="px-6 py-2 bg-blue-100 text-blue-800 border border-blue-200 rounded-full font-medium shadow-sm">Sapphire House</span>
          <span className="px-6 py-2 bg-green-100 text-green-800 border border-green-200 rounded-full font-medium shadow-sm">Emerald House</span>
          <span className="px-6 py-2 bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-full font-medium shadow-sm">Topaz House</span>
        </div>
      </div>
    </main>
  );
}
