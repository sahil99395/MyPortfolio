
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20soft%20natural%20lighting%2C%20clean%20desk%20setup%20with%20laptop%20and%20plants%2C%20warm%20ambient%20lighting%20creating%20a%20productive%20and%20inspiring%20atmosphere%2C%20professional%20developer%20environment%20with%20subtle%20tech%20elements%2C%20calm%20and%20focused%20mood&width=1920&height=1080&seq=hero1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center bg-white/90 px-4 py-2 rounded-full shadow-lg">
                  <i className="ri-map-pin-line text-red-500 mr-2"></i>
                  <span className="text-gray-600 font-medium">Kolkata, India</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Sahil Kumar
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate full-stack developer from Kolkata, turning innovative ideas into reality through clean code and intelligent solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects" 
                      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  View My Work
                </Link>
                <Link href="/contact" 
                      className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap cursor-pointer">
                  Get In Touch
                </Link>
              </div>
              
              <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
                <a href="https://github.com/sahil99395" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 cursor-pointer">
                  <i className="ri-github-fill text-2xl text-gray-700"></i>
                </a>
                <a href="https://linkedin.com/in/Sahilkumar2026" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 cursor-pointer">
                  <i className="ri-linkedin-fill text-2xl text-blue-600"></i>
                </a>
                <a href="https://leetcode.com/u/Sahil_2026/" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 cursor-pointer">
                  <i className="ri-code-line text-2xl text-orange-500"></i>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://static.readdy.ai/image/78a8abb691e9772fce13a116852ef754/f201aa6699ece9f3a38c620f69755dfe.jfif"
                    alt="Sahil Kumar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <i className="ri-code-s-slash-line text-3xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="animate-bounce">
              <i className="ri-arrow-down-line text-3xl text-gray-400"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From algorithms to intelligent systems, here's how I've been crafting my path in technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development Journey */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mb-6 mx-auto">
                <i className="ri-code-box-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Web Development</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Started my coding adventure building responsive websites and interactive web applications. 
                From mastering HTML, CSS, and JavaScript to diving deep into React, Next.js, and modern frameworks, 
                I've been crafting digital experiences that users love. Every project taught me something new about 
                creating seamless, user-friendly interfaces that solve real problems.
              </p>
            </div>

            {/* DSA with C++ Journey */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mb-6 mx-auto">
                <i className="ri-flow-chart text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">DSA with C++</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Embarked on an exciting journey through Data Structures and Algorithms using C++. 
                From understanding basic arrays and linked lists to mastering complex graph algorithms and dynamic programming, 
                each problem solved has sharpened my logical thinking. This journey has taught me to approach 
                challenges systematically and find efficient solutions to complex computational problems.
              </p>
            </div>

            {/* Machine Learning Journey */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mb-6 mx-auto">
                <i className="ri-brain-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Machine Learning</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ventured into the fascinating world of Machine Learning, where data tells stories and algorithms learn patterns. 
                Working with Python libraries like scikit-learn, pandas, and TensorFlow, I've been exploring how machines can 
                understand and predict from data. From building classification models to experimenting with neural networks, 
                this journey has opened my eyes to the incredible potential of AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Bring to the Table</h2>
            <p className="text-xl text-gray-600">A blend of technical skills and creative problem-solving</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: 'ri-reactjs-line', color: 'text-blue-500' },
              { name: 'Next.js', icon: 'ri-window-line', color: 'text-gray-800' },
              { name: 'C++', icon: 'ri-code-s-slash-line', color: 'text-blue-600' },
              { name: 'Python', icon: 'ri-file-code-line', color: 'text-green-600' },
              { name: 'JavaScript', icon: 'ri-javascript-line', color: 'text-yellow-500' },
              { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-500' },
              { name: 'MongoDB', icon: 'ri-database-line', color: 'text-green-600' },
              { name: 'Git', icon: 'ri-git-branch-line', color: 'text-orange-600' },
              { name: 'Machine Learning', icon: 'ri-robot-line', color: 'text-purple-600' },
              { name: 'Algorithms', icon: 'ri-flow-chart', color: 'text-red-500' },
              { name: 'TypeScript', icon: 'ri-code-line', color: 'text-blue-500' },
              { name: 'Tailwind CSS', icon: 'ri-css3-line', color: 'text-cyan-500' }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center">
                <div className={`w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${skill.icon} text-3xl ${skill.color}`}></i>
                </div>
                <p className="font-semibold text-gray-800 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with fellow developers and innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer font-semibold">
              Explore My Projects
            </Link>
            <Link href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all whitespace-nowrap cursor-pointer font-semibold">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
