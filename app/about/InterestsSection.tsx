'use client';

export default function InterestsSection() {
  const interests = [
    {
      icon: 'ri-music-2-line',
      title: 'Music',
      description: 'Playing guitar and discovering new artists. Music helps me think differently about problem-solving.'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Reading',
      description: 'Mostly tech blogs and sci-fi novels. Always hunting for new perspectives and ideas.'
    },
    {
      icon: 'ri-camera-line',
      title: 'Photography',
      description: 'Street photography on weekends. It teaches me to notice details – useful for UI/UX too.'
    },
    {
      icon: 'ri-plane-line',
      title: 'Travel',
      description: 'Exploring new cities and cultures. Each place teaches me something about design and life.'
    },
    {
      icon: 'ri-gamepad-line',
      title: 'Gaming',
      description: 'Strategy games and indie titles. Great for understanding user experience and storytelling.'
    },
    {
      icon: 'ri-cup-line',
      title: 'Coffee',
      description: 'Trying different brewing methods. There\'s something zen about the perfect cup of coffee.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Beyond Code
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                  <i className={`${interest.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{interest.title}</h3>
                <p className="text-gray-600 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect!</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to meet fellow developers, designers, and anyone who shares a passion for creating meaningful digital experiences.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
                  Get in Touch
                </a>
                <a href="/projects" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}