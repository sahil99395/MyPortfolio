'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogHero from './BlogHero';
import BlogPosts from './BlogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </div>
  );
}