// app/news/page.tsx

import Link from 'next/link';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "GBR Students Shine in State Science Fair",
      date: "July 12, 2026",
      excerpt: "Our high school students secured the top three positions in the annual State Science Exhibition with their innovative renewable energy models.",
      category: "Achievement",
      imagePlaceholder: "Science Fair Image"
    },
    {
      id: 2,
      title: "New Synthetic Basketball Court Inaugurated",
      date: "June 28, 2026",
      excerpt: "Expanding our sports infrastructure, the A.C. Campus proudly inaugurates a state-of-the-art synthetic basketball court for our athletes.",
      category: "Infrastructure",
      imagePlaceholder: "Basketball Court Image"
    },
    {
      id: 3,
      title: "Annual Cultural Fest 'Tarang' Announced",
      date: "June 15, 2026",
      excerpt: "Get ready for a week of music, dance, and art. The much-awaited annual cultural festival is scheduled for the first week of September.",
      category: "Events",
      imagePlaceholder: "Cultural Fest Image"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">School News & Updates</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Read about the latest events, achievements, and developments happening across GBR Schools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <article key={article.id} className="bg-[var(--color-surface)] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
            <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-200 relative overflow-hidden">
              <span className="text-gray-400 font-medium z-10">{article.imagePlaceholder}</span>
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-md">
                  {article.category}
                </span>
                <span className="text-xs text-text-muted font-medium">{article.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {article.excerpt}
              </p>
              <Link href={`/news/${article.id}`} className="text-primary font-medium text-sm hover:text-accent transition-colors flex items-center gap-1 mt-auto">
                Read Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}