// app/notices/page.tsx

export default function NoticesPage() {
  const notices = [
    {
      id: 1,
      date: "July 15, 2026",
      title: "First Term Fee Payment Reminder",
      description: "This is a reminder that the first installment of the tuition and transport fee for the academic year is due. Please clear all dues to avoid late fee penalties.",
      category: "Fee",
      isNew: true
    },
    {
      id: 2,
      date: "July 10, 2026",
      title: "Upcoming Parent-Teacher Meeting",
      description: "The monthly PTM for Nursery to Class X will be held on the 2nd Saturday of this month. Parents are requested to book their time slots via the GBR App.",
      category: "Academic",
      isNew: true
    },
    {
      id: 3,
      date: "July 02, 2026",
      title: "Independence Day Celebrations Planning",
      description: "Students interested in participating in cultural activities for the upcoming Independence Day celebrations should register their names with their respective class teachers by July 25th.",
      category: "Events",
      isNew: false
    },
    {
      id: 4,
      date: "June 25, 2026",
      title: "School Uniform Guidelines Refreshed",
      description: "Parents are requested to ensure students adhere strictly to the school uniform policy. Fancy watches, nail polish, and inappropriate hairstyles will result in disciplinary action.",
      category: "Discipline",
      isNew: false
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Notice Board & Circulars</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Stay updated with the latest announcements, events, and official circulars from the school administration.
        </p>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-6 shadow-sm hover:border-primary/30 transition-colors relative overflow-hidden group">
            {notice.isNew && (
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                NEW
              </div>
            )}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
                    {notice.category}
                  </span>
                  <span className="text-sm text-text-muted font-medium">{notice.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {notice.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {notice.description}
                </p>
              </div>
              <div className="flex-shrink-0 md:self-center mt-4 md:mt-0">
                <button className="text-sm font-medium text-primary hover:text-accent border border-primary/20 hover:border-accent bg-white px-4 py-2 rounded-md transition-all">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}