'use client';

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isMounted) return;
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMounted) return;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "0f8d2ee1-8b1d-4d24-b9ee-ee890328edab",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // reset form
      } else {
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setTimeout(() => {
      if (isMounted) {
        setIsSubmitted(false);
      }
    }, 3000);
  };

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Send me a message</h2>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            placeholder="Sahil Kumar"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            placeholder="Sahil@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={500}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {formData.message.length}/500 characters
          </div>
        </div>
        
        <button
          type="submit"
          disabled={formData.message.length > 500}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium whitespace-nowrap cursor-pointer"
        >
          {isSubmitted ? 'Message Sent! ✓' : 'Send Message'}
        </button>
      </form>
      
      {isSubmitted && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">Thanks for your message! I'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
}
