'use client';

import Image from "next/image";
import SahilWorking from "./Sahil-Working.jpg";

export default function PersonalStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Local image instead of Google Drive link */}
          <div>
            <Image 
              src={SahilWorking}
              alt="Sahil working"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full object-cover object-top"
              priority
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My coding adventure started during my engineering studies at Techno Main Salt Lake, Kolkata. What began as curiosity about how software works turned into a genuine passion for problem-solving through code.
              </p>
              <p>
                I fell in love with C++ first - there's something satisfying about understanding memory management and object-oriented programming from the ground up. Then Python came along and opened up the world of machine learning and data science. Now I'm diving deeper into Java, especially enjoying how OOP principles make complex systems more manageable.
              </p>
              <p>
                Data Structures and Algorithms became my playground. Every LeetCode problem feels like a puzzle waiting to be solved. I spend hours optimizing solutions, not just to pass interviews, but because efficient code is beautiful code.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science with a focus on Data Science, maintaining a 7.05 CGPA while working on real-world projects. When I'm not coding, you'll find me exploring new ML algorithms or contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
