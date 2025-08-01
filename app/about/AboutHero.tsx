'use client';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm more than just a developer – I'm a problem solver, a learner, and someone who 
            believes technology can make the world a better place, one project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}