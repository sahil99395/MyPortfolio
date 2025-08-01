'use client';

export default function ProjectsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Here are some of the projects I've built – each one taught me something new 
            and pushed me to grow as a developer. From simple ideas to complex solutions.
          </p>
        </div>
      </div>
    </section>
  );
}