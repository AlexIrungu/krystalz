import React from 'react';

const Crystals = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Crystals and Gemstones</h1>
      <p className="text-gray-600 mb-8">
        Discover the healing power of authentic crystals and gemstones. Each piece is carefully selected and curated to bring positive energy and wellness to your life.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Clear Quartz</h2>
          <p>The master healer, known for amplifying energy and thought.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Amethyst</h2>
          <p>Promotes calmness, spiritual awareness, and emotional healing.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Rose Quartz</h2>
          <p>The stone of unconditional love, healing emotional wounds.</p>
        </div>
      </div>
    </div>
  );
};

export default Crystals