import React from 'react';

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Upcoming Events & Workshops</h1>
      <p className="text-gray-600 mb-8">
        Join our community events focused on wellness, personal growth, and holistic healing.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Crystal Healing Workshop</h2>
          <p>Learn about crystal energies and healing techniques.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mindfulness Retreat</h2>
          <p>A day of meditation, relaxation, and self-discovery.</p>
        </div>
      </div>
    </div>
  );
};

export default Events