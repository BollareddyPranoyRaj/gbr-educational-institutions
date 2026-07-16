// app/calendar/page.tsx

export default function CalendarPage() {
  const festivals = [
    { date: "26.06.2026", day: "Fri", name: "Muharram" },
    { date: "15.08.2026", day: "Sat", name: "Independence Day" },
    { date: "25.08.2026", day: "Tue", name: "Eid-E-Milad" },
    { date: "04.09.2026", day: "Fri", name: "Janmastami" },
    { date: "14.09.2026", day: "Mon", name: "Ganesh Chaturthi" },
    { date: "02.10.2026", day: "Fri", name: "Gandhi Jayanthi" },
    { date: "19.10.2026", day: "Mon", name: "Durgastami" },
    { date: "20.10.2026", day: "Tue", name: "Vijaya Dashami" },
    { date: "08.11.2026", day: "Sun", name: "Deepavali" },
    { date: "25.12.2026", day: "Fri", name: "Christmas Day" },
    { date: "15.01.2027", day: "Fri", name: "Pongal" },
    { date: "16.01.2027", day: "Sat", name: "Kanuma Panduga" },
    { date: "26.01.2027", day: "Tue", name: "Republic Day" },
    { date: "06.03.2027", day: "Sat", name: "Maha Shivaratri" },
    { date: "09.03.2027", day: "Tue", name: "Idul Fitr" },
    { date: "22.03.2027", day: "Mon", name: "Holi" },
    { date: "26.03.2027", day: "Fri", name: "Good Friday" },
    { date: "05.04.2027", day: "Mon", name: "Babu Jagjivan Ram Jayanti" },
    { date: "07.04.2027", day: "Wed", name: "Ugadi" },
    { date: "14.04.2027", day: "Wed", name: "Dr Ambedkar Jayanti" },
    { date: "15.04.2027", day: "Thu", name: "Sri Rama Navami" }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Academic Calendar</h1>
        <p className="text-text-muted">List of festivals and holidays for the academic year 2026-2027.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-gray-200 text-primary">
              <th className="py-4 px-6 font-semibold">DATE</th>
              <th className="py-4 px-6 font-semibold">DAY</th>
              <th className="py-4 px-6 font-semibold">LIST OF FESTIVALS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {festivals.map((festival, index) => (
              <tr key={index} className="hover:bg-primary/[0.02] transition-colors">
                <td className="py-3 px-6 text-text-muted">{festival.date}</td>
                <td className="py-3 px-6 text-text-muted">{festival.day}</td>
                <td className="py-3 px-6 text-text-main font-medium">{festival.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}