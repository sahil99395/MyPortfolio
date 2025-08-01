'use client';

export default function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            My Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Thoughts, learnings, and experiences from my journey as a developer. 
            Sometimes technical, sometimes personal, always honest.
          </p>
        </div>
      </div>
    </section>
  );
}