'use client';

import Link from 'next/link';

export default function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "How I Went From Zero to Developer in 18 Months",
      excerpt: "My journey from complete beginner to landing my first developer role wasn't exactly smooth sailing. Here's what I wish someone had told me at the start, the mistakes I made, and the breakthrough moments that kept me going when I wanted to give up.",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://readdy.ai/api/search-image?query=Person%20learning%20to%20code%20on%20laptop%20with%20multiple%20programming%20books%20around%2C%20determined%20expression%2C%20cozy%20study%20environment%20with%20coffee%20and%20notes%2C%20inspirational%20learning%20atmosphere%20with%20warm%20lighting&width=600&height=300&seq=blog1&orientation=landscape",
      tags: ["Career", "Learning", "Personal"]
    },
    {
      id: 2,
      title: "The Art of Debugging: What 1000+ Bugs Taught Me",
      excerpt: "Debugging used to frustrate me to no end. Now I actually enjoy it – weird, I know. After fixing countless bugs, I've learned that debugging is less about finding the problem and more about understanding the story your code is trying to tell you.",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://readdy.ai/api/search-image?query=Developer%20debugging%20code%20on%20multiple%20monitors%2C%20focused%20concentration%2C%20code%20editor%20with%20syntax%20highlighting%2C%20problem-solving%20atmosphere%2C%20technical%20workspace%20with%20debugging%20tools%20visible&width=600&height=300&seq=blog2&orientation=landscape",
      tags: ["Technical", "Tips", "Development"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium cursor-pointer whitespace-nowrap"
                      >
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More posts coming soon!</h3>
              <p className="text-gray-600 mb-6">
                I try to write regularly about my development journey, things I learn, 
                and insights from building projects. Subscribe to my newsletter to stay updated.
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}