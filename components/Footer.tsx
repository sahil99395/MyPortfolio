
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sahil Kumar</h3>
            <p className="text-gray-600 leading-relaxed">
              A passionate developer building projects that solve real-world problems. 
              Always learning, always creating.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About Me
              </Link>
              <Link href="/projects" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/sahil99395" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/Sahilkumar2026" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://leetcode.com/u/_iam_sahilsingh/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <i className="ri-code-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Sahil Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
