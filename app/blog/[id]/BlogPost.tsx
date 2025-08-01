'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function BlogPost({ postId }: { postId: string }) {
  const posts = {
    '1': {
      title: "How I Went From Zero to Developer in 18 Months",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://readdy.ai/api/search-image?query=Person%20learning%20to%20code%20on%20laptop%20with%20multiple%20programming%20books%20around%2C%20determined%20expression%2C%20cozy%20study%20environment%20with%20coffee%20and%20notes%2C%20inspirational%20learning%20atmosphere%20with%20warm%20lighting&width=800&height=400&seq=blogfull1&orientation=landscape",
      content: `
        <p>Eighteen months ago, I couldn't tell the difference between HTML and HTTP. Today, I'm building full-stack applications and (somehow) getting paid for it. It's been quite the journey, and definitely not the smooth, linear path I thought it would be when I started.</p>

        <h2>The "Oh Crap" Moment</h2>
        <p>I was working in marketing, feeling increasingly disconnected from what I was doing. One day, I tried to make a simple change to our company website and realized I had no idea how any of it worked. That frustration turned into curiosity, which turned into my first "Hello World" in Python at 11 PM on a Tuesday.</p>

        <p>What struck me wasn't just that I could make the computer do what I wanted – it was that feeling of building something from nothing. Like digital Lego, but the possibilities were infinite.</p>

        <h2>The First Three Months: Tutorial Hell</h2>
        <p>I did what every beginner does: I watched every tutorial I could find. Codecademy, freeCodeCamp, YouTube – you name it. I felt like I was learning a ton, but when I tried to build something on my own, I'd freeze up. Sound familiar?</p>

        <p>The breakthrough came when I stopped trying to learn "everything" and started building stupid little projects. A calculator that only did addition. A to-do list that forgot everything when you refreshed the page. They were terrible, but they were <em>mine</em>.</p>

        <h2>Months 4-8: The Humbling</h2>
        <p>This is where things got real. I started applying for junior positions way too early and got rejected. A lot. Each rejection stung, but the feedback was incredibly valuable. "Your code works, but it's not maintainable." "You understand the basics, but you need to think about scalability."</p>

        <p>I learned more in those months of rejection than in all my tutorials combined. I started reading other people's code, contributing to open source projects (tiny contributions, but still), and most importantly, I learned to ask better questions.</p>

        <h2>The Home Stretch</h2>
        <p>Months 9-18 were about refinement. I rebuilt my portfolio three times. I learned about testing, deployment, and all those "boring" parts of development that actually matter. I started a blog (yes, this one) to document what I was learning.</p>

        <p>The job offer came from an unexpected place – a local startup that found my blog post about debugging CSS. Turns out, being able to communicate your learning process is just as important as the code itself.</p>

        <h2>What I Wish I'd Known</h2>
        <ul>
          <li><strong>Build things, even if they're ugly.</strong> Perfect is the enemy of done, and done projects teach you more than perfect tutorials.</li>
          <li><strong>Don't learn alone.</strong> Find a community, join Discord servers, go to meetups. Programming is surprisingly social.</li>
          <li><strong>Document your journey.</strong> Blog, tweet, make videos – whatever works. Teaching others helps you learn.</li>
          <li><strong>Embrace the confusion.</strong> If you're not confused, you're not learning something new.</li>
        </ul>

        <p>Looking back, those 18 months changed everything. Not just my career, but how I think about problems, learning, and what's possible when you're willing to be uncomfortable for a while.</p>

        <p>If you're just starting out, or somewhere in the middle of your own journey, remember: everyone's path is different, but everyone starts at zero. The secret isn't being naturally gifted – it's being stubborn enough to keep going when things get hard.</p>

        <p>And trust me, they will get hard. But that's exactly when it gets interesting.</p>
      `
    },
    '2': {
      title: "The Art of Debugging: What 1000+ Bugs Taught Me",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://readdy.ai/api/search-image?query=Developer%20debugging%20code%20on%20multiple%20monitors%2C%20focused%20concentration%2C%20code%20editor%20with%20syntax%20highlighting%2C%20problem-solving%20atmosphere%2C%20technical%20workspace%20with%20debugging%20tools%20visible&width=800&height=400&seq=blogfull2&orientation=landscape",
      content: `
        <p>I used to hate debugging. Like, <em>really</em> hate it. There's something uniquely frustrating about code that was working perfectly five minutes ago suddenly deciding to break for no apparent reason. But somewhere around bug #200, my relationship with debugging changed completely.</p>

        <p>Now I actually look forward to tricky bugs. They're like puzzles that teach you something new about your code, your assumptions, and sometimes, yourself.</p>

        <h2>The Mindset Shift</h2>
        <p>The biggest change for me was stopping to see bugs as failures and starting to see them as teachers. Every bug is your code trying to tell you something important:</p>

        <ul>
          <li>"Hey, you made an assumption that isn't always true"</li>
          <li>"This edge case you didn't think about just happened"</li>
          <li>"Your mental model of how this works is slightly off"</li>
        </ul>

        <p>Once I started listening to what my bugs were trying to tell me, debugging became less about fighting with broken code and more about having a conversation with it.</p>

        <h2>My Debugging Ritual</h2>
        <p>Here's the process I've developed after fixing way too many bugs:</p>

        <h3>1. Reproduce It First</h3>
        <p>I spent way too much time early on trying to fix bugs I couldn't consistently reproduce. Now, step one is always: can I make this happen again? If not, I'm probably chasing ghosts.</p>

        <h3>2. Read the Error Message (Really Read It)</h3>
        <p>I know, I know. But seriously – error messages are usually trying to help you. I used to glance at them and immediately start changing code. Now I read them carefully, sometimes even out loud. You'd be surprised how often the error message tells you exactly what's wrong.</p>

        <h3>3. Isolate the Problem</h3>
        <p>This is where things get interesting. I create the smallest possible version of the code that still produces the bug. This alone solves probably 30% of my bugs – turns out the issue wasn't where I thought it was.</p>

        <h3>4. Question Everything</h3>
        <p>What assumptions am I making? What did I think was true that might not be? I keep a mental list of common culprits:</p>
        <ul>
          <li>Variables being undefined when I expect them to have values</li>
          <li>Asynchronous operations not finishing when I think they have</li>
          <li>Data being a different type than expected</li>
          <li>Scope issues (especially with callbacks)</li>
        </ul>

        <h2>The Tools That Changed Everything</h2>
        <p>Good tools make debugging so much more pleasant:</p>

        <p><strong>Browser DevTools</strong> – I probably spend more time in the debugger than in my code editor some days. Setting breakpoints and stepping through code line by line reveals so much about what's actually happening versus what you think is happening.</p>

        <p><strong>console.log() (strategically)</strong> – Yes, it's basic, but it works. I log the inputs to functions, the outputs, and any intermediate values that might be surprising. Just remember to remove them later!</p>

        <p><strong>Network Tab</strong> – For any bug involving APIs or external data, the Network tab in DevTools is your best friend. You can see exactly what requests are being made and what responses you're getting.</p>

        <h2>The Weird Bugs That Taught Me the Most</h2>
        <p>Some bugs stick with you. Here are three that completely changed how I think about code:</p>

        <p><strong>The Timing Bug</strong> – I had a form that worked perfectly... except on Fridays after 3 PM. Turns out, our API was slower during peak usage, and my code wasn't handling the longer response times. Taught me to always think about performance under different conditions.</p>

        <p><strong>The CSS Bug That Wasn't</strong> – Spent two days debugging a layout issue that I was convinced was a CSS problem. Turns out, the backend was occasionally returning an extra space in a string, which was breaking my grid calculations. Always check your data first.</p>

        <p><strong>The Cache Bug</strong> – Users kept seeing old data after I deployed updates. I was pulling my hair out until I realized browser caching was the culprit. Now I always think about caching strategies when building features.</p>

        <h2>Debugging Is a Skill</h2>
        <p>The most important thing I've learned is that debugging is a skill you can get better at, not just a necessary evil. The more bugs you fix, the better you get at recognizing patterns and knowing where to look.</p>

        <p>Start keeping track of the bugs you encounter and how you solved them. You'll start to see patterns in your own code and common mistakes you make. I keep a simple document with "bug types" I encounter frequently and how to spot them.</p>

        <p>Most importantly, be patient with yourself. Some bugs are going to be obvious in hindsight, others are going to be genuinely tricky. Both are part of the process of becoming a better developer.</p>

        <p>Happy debugging! 🐛</p>
      `
    }
  };

  const post = posts[postId as '1' | '2'];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 cursor-pointer">
                <i className="ri-arrow-left-line mr-2"></i>
                Back to Blog
              </Link>
            </div>
            
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6 text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                {post.title}
              </h1>
              
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover object-top rounded-2xl shadow-xl"
              />
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#374151'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enjoyed this post?</h3>
                <p className="text-gray-600 mb-6">
                  I'd love to hear your thoughts or experiences with similar topics. 
                  Feel free to reach out!
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
                    Get in Touch
                  </Link>
                  <Link href="/blog" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap">
                    More Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}