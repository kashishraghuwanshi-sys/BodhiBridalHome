import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import wat from "../assets/images/wat.jpg";
import xuan from "../assets/images/xuan.jpg";

function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-400 to-orange-400 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Preserving the legacy and beauty of Buddhist monasteries around the world
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are dedicated to <span className="font-bold text-red-500">preserving, documenting, and sharing</span> the profound beauty and spiritual significance of Buddhist monasteries from across the globe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our platform serves as a <span className="font-bold">bridge between ancient wisdom</span> and modern seekers, offering insights into the architectural marvels, historical significance, and spiritual teachings housed within these sacred spaces.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through detailed documentation, stunning photography, and comprehensive research, we aim to inspire a deeper appreciation for <span className="font-bold text-orange-500">Buddhist heritage</span> and encourage cultural preservation.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={wat} 
                  alt="Buddhist Monastery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-400 rounded-lg -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={xuan} 
                  alt="Tiger's Nest Monastery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-400 rounded-lg -z-10"></div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                What began as a <span className="font-bold">personal journey</span> through the Himalayan monasteries has evolved into a comprehensive digital archive celebrating Buddhist monastic architecture worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                From the <span className="font-bold text-red-500">cliff-hanging temples of Bhutan</span> to the ancient ruins of <span className="font-bold text-orange-500">Bagan in Myanmar</span>, we've traversed diverse landscapes to document these extraordinary spiritual sanctuaries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each monastery tells a unique story of <span className="font-bold">faith, resilience, and artistic excellence</span> - stories we're honored to share with the world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by principles of respect, authenticity, and cultural preservation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide <span className="font-semibold">accurate, well-researched information</span> about each monastery, ensuring historical and cultural integrity.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Cultural Respect
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every monastery is presented with <span className="font-semibold">deep respect</span> for its spiritual significance and cultural context.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to <span className="font-semibold">educate and inspire</span> visitors about Buddhist heritage and monastic traditions.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Preservation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting the <span className="font-semibold">conservation and protection</span> of these architectural and spiritual treasures for future generations.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Accessibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Making these distant, often <span className="font-semibold">remote monasteries accessible</span> to everyone through digital documentation.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Passion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Driven by <span className="font-semibold">genuine love and reverence</span> for Buddhist art, architecture, and spiritual wisdom.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources for enthusiasts, travelers, and scholars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Offering 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Detailed Monastery Profiles
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In-depth information about history, architecture, location, and spiritual significance of each monastery.
                </p>
              </div>
            </div>

            {/* Offering 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  High-Quality Photography
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stunning visual documentation capturing the beauty and essence of these sacred spaces.
                </p>
              </div>
            </div>

            {/* Offering 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Cultural Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Exploration of Buddhist traditions, practices, and the role of monasteries in preserving spiritual heritage.
                </p>
              </div>
            </div>

            {/* Offering 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Travel Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Practical guidance for visitors wishing to experience these monasteries firsthand.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore the world's most remarkable Buddhist monasteries and discover the timeless wisdom they hold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Explore Monasteries
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-red-500 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default About;