
'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'C++', level: 85, icon: 'ri-code-s-slash-line' },
    { name: 'Python', level: 88, icon: 'ri-file-code-line' },
    { name: 'Java (OOP)', level: 80, icon: 'ri-cup-line' },
    { name: 'Data Structures & Algorithms', level: 82, icon: 'ri-node-tree' },
    { name: 'Machine Learning', level: 78, icon: 'ri-brain-line' },
    { name: 'Web Development', level: 75, icon: 'ri-global-line' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What I'm Working With
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                    <i className={`${skill.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                React.js
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Deep Learning
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                System Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
