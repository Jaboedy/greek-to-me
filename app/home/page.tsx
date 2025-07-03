'use client';

import Image from 'next/image';
import { caesarDressing } from '@/app/ui/fonts';
import { LayoutWrapper } from '@/app/ui/layout-wrapper';
import { ImageWithPlaceholder } from '@/app/ui/image-with-placeholder';

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="p-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
          <div className="relative h-[500px] w-full">
            <ImageWithPlaceholder
              src="/images/hero-gyro.jpg"
              alt="Delicious Greek Food"
              fill
              className="object-cover"
              
              blurDataURL="data:image/jpeg;base64,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"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className={`${caesarDressing.className} text-5xl mb-4 text-gold-accent`}>Greek To Me</h1>
              <p className="text-xl mb-6">Authentic Greek Cuisine with a Modern Street Food Twist</p>
              <button className="bg-blue-primary hover:bg-blue-secondary text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg">
                Order Online
              </button>
            </div>
          </div>
        </section>

        {/* Featured Menu Items */}
        <section className="mb-12">
          <h2 className={`${caesarDressing.className} text-3xl mb-6 text-blue-primary`}>Our Popular Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Gyros', 'Greek Salad', 'Souvlaki'].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="bg-gray-200 animate-pulse h-full w-full"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-primary mb-2">{item}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-accent font-bold">$10.99</span>
                    <button className="bg-blue-primary hover:bg-blue-secondary text-white px-4 py-2 rounded text-sm transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 bg-greek-white rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className={`${caesarDressing.className} text-3xl mb-4 text-blue-primary`}>Our Story</h2>
              <p className="mb-4 text-gray-700">
                Greek To Me started as a small family restaurant in 2010, bringing authentic Greek flavors to the city. Our recipes have been passed down through generations.
              </p>
              <p className="text-gray-700">
                We pride ourselves on using fresh, locally-sourced ingredients and traditional cooking methods to create the most authentic Greek dining experience.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 rounded-xl overflow-hidden">
              <div className="bg-gray-200 animate-pulse h-full w-full"></div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-primary text-white rounded-xl p-8 text-center">
          <h2 className={`${caesarDressing.className} text-3xl mb-4`}>Join Our Family</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Sign up for our newsletter to receive special offers, event updates, and more Greek goodness straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg text-gray-800 flex-grow"
            />
            <button className="bg-gold-accent hover:bg-yellow-500 text-blue-primary px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
}
