import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crafting Comfort for Your Home
          </h1>
          <p className="text-xl text-white mb-8">
            Discover our collection of handcrafted furniture, designed to bring elegance and comfort to your living space.
          </p>
          <a
            href="/collections"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            View Collections
          </a>
        </div>
      </div>
    </div>
  );
}