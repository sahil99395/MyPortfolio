
'use client';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in touch</h2>
      
      <div className="space-y-8">
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development. Don't hesitate to reach out!
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              <i className="ri-mail-line text-xl text-blue-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">sahilkr2026@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              <i className="ri-phone-line text-xl text-blue-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91-9939562555</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              <i className="ri-map-pin-line text-xl text-blue-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">Kolkata, India</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
              <i className="ri-time-line text-xl text-blue-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Response Time</h3>
              <p className="text-gray-600">Usually within 24 hours</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with me</h3>
          <div className="flex gap-4">
            <a 
              href="https://github.com/sahil99395" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all cursor-pointer"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/Sahilkumar2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all cursor-pointer"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://leetcode.com/u/Sahil_2026/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all cursor-pointer"
            >
              <i className="ri-code-line text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Download my resume</h3>
          <p className="text-gray-600 mb-4">
            Want to see my full experience and background? Download my latest resume.
          </p>
          <a 
            href="https://drive.google.com/uc?export=download&id=1OD1BYXMQDgr_Zs7OPqJy2UxZX32et8t8" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-download-line"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
