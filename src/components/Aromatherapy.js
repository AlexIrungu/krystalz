import React from 'react';

const Aromatherapy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Aromatherapy</h1>
      <p className="text-gray-600 mb-8">
        Explore the transformative power of plant essences. Our carefully curated essential oils help in healing, relaxation, energy restoration, and grounding.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Lavender</h2>
          <p>Promotes relaxation and helps reduce stress and anxiety.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Peppermint</h2>
          <p>Increases energy, improves focus, and aids digestion.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Eucalyptus</h2>
          <p>Supports respiratory health and provides a cooling sensation.</p>
        </div>
      </div>
    </div>
  );
};

export default Aromatherapy