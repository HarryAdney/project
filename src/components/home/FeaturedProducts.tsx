import React from 'react';
import { ProductCard } from '../products/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Classic Leather Sofa',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80',
    category: 'Sofas'
  },
  {
    id: 2,
    name: 'Modern Dining Table',
    price: 899,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80',
    category: 'Dining'
  },
  {
    id: 3,
    name: 'Luxury Bed Frame',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    category: 'Bedroom'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}