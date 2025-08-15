
'use client';

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Diabetes Prediction System",
      description: "Built this ML-powered web app when I realized how important early diabetes detection could be. Using a massive dataset of 1M+ records, I developed a prediction system that helps identify diabetes risk with 88% accuracy. The challenging part was reducing false positives by fine-tuning hyperparameters.",
      image: "https://storage.googleapis.com/kaggle-datasets-images/4463541/7655840/2eb9b556420345db5d21b9fa262a3c74/dataset-cover.jpg?t=2024-02-19-12-02-35",
      tags: ["Python", "Flask", "Scikit-learn", "ML"],
      github: "https://github.com/sahil99395/Diabetes-Prediction",
      demo: "#",
      featured: true
    },
    {
      title: "Rock vs Mine Detection",
      description: "This sonar-based classification project taught me a lot about signal processing and machine learning. Working with 208 sonar samples and 60 features, I built a model that can distinguish between rocks and mines with 90% accuracy. The real challenge was getting the misclassification rate below 10%.",
      image: "https://i.ytimg.com/vi/-L_y07fbork/maxresdefault.jpg",
      tags: ["Python", "Scikit-Learn", "Machine Learning", "Classification"],
      github: "https://github.com/sahil99395/ROCK-VS-MINE-PREDICTION",
      demo: "#"
    },
    {
      title: "Smart Attendance System",
      description: "Got tired of traditional attendance methods, so I built this face recognition system that also accepts voice input. Using dlib for facial recognition and speech recognition for roll calls, it achieves 92% accuracy and cuts attendance time by 80%. Perfect for classrooms and offices.",
      image: "https://readdy.ai/api/search-image?query=Smart%20attendance%20system%20interface%20with%20face%20recognition%20technology%2C%20modern%20classroom%20management%20software%2C%20biometric%20authentication%20display%2C%20clean%20educational%20technology%20design%20with%20facial%20detection%20elements&width=600&height=400&seq=attendance1&orientation=landscape",
      tags: ["Python", "dlib", "Face Recognition", "Speech Recognition"],
      github: "https://github.com/sahil99395/Smart-Attendance-System-Using-Machine-Learning",
      demo: "#"
    },
    {
      title: "Data Visualizer(Crypto Dashboard)",
      description: "• Built an interactive cryptocurrency dashboard to visualize real-time market trends and price movements.  • Integrated CoinGecko API for live cryptocurrency data updates,Implemented ApexCharts.js for dynamic,interactive chart visualizations. • Key Technologies:HTML, CSS, and JavaScript for seamless multi-device experience.",
      image: "https://i.ytimg.com/vi/98pOldgPQLQ/maxresdefault.jpg",
      tags: ["Express.js", "Node.js", "JavaScript", "HTML/CSS"],
      github: "https://github.com/sahil99395/Data-Visualization-Project-Crypto-Dashboard",
      demo: "#"
    },
    {
      title: "Student Result Management System",
      description: "Created this full-stack portal for educational institutions to manage student results efficiently. Features a secure admin panel with real-time database updates and PDF export functionality. It's been rewarding to build something that actually helps streamline academic processes.",
      image: "https://readdy.ai/api/search-image?query=Student%20result%20management%20system%20dashboard%20with%20academic%20data%20tables%2C%20educational%20administration%20software%20interface%2C%20clean%20database%20management%20design%2C%20professional%20school%20management%20portal%20with%20charts%20and%20student%20information&width=600&height=400&seq=student1&orientation=landscape",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/sahil99395",
      demo: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 ${project.featured ? 'lg:col-span-2' : ''}`}>
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover object-top ${project.featured ? 'h-80' : 'h-64'}`}
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured Project
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-github-fill text-lg"></i>
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-external-link-line text-lg"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always working on something new. Check out my GitHub for more projects, 
              experiments, and contributions to open source.
            </p>
            <a 
              href="https://github.com/sahil99395" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-github-fill text-xl"></i>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
