import React, { useState } from 'react';
import amethyst from './images/amethyst.jpeg'
import citrine from './images/citrine.jpeg'
import clear from './images/clearquartz.jpeg'
import jade from './images/Jade.jpeg'
import lapis from './images/lapis.jpeg'
import moon from './images/moonstone.jpeg'
import obsidian from './images/obsidian.jpeg'
import tiger from './images/tigereye.jpeg'
import rose from './images/rosequartz.jpeg'

const crystalData = [
    { id: 1, name: 'Amethyst', color: 'Purple', benefit: 'Calming and intuitive', image: amethyst },
    { id: 2, name: 'Rose Quartz', color: 'Pink', benefit: 'Love and emotional healing', image: rose },
    { id: 3, name: 'Citrine', color: 'Yellow', benefit: 'Abundance and positivity', image: citrine },
    { id: 4, name: 'Clear Quartz', color: 'Transparent', benefit: 'Amplifies energy and healing', image: clear },
    { id: 5, name: 'Obsidian', color: 'Black', benefit: 'Protection and grounding', image: obsidian },
    { id: 6, name: 'Lapis Lazuli', color: 'Blue', benefit: 'Wisdom and truth', image: lapis},
    { id: 7, name: 'Jade', color: 'Green', benefit: 'Harmony and good luck', image: jade },
    { id: 8, name: 'Moonstone', color: 'White/Pearly', benefit: 'New beginnings and inner growth', image: moon },
    { id: 9, name: 'Tiger/s Eye', color: 'Golden Brown', benefit: 'Confidence and willpower', image: tiger },
];

const CrystalCard = ({ crystal }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={crystal.image} alt={crystal.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{crystal.name}</h3>
      <p className="text-gray-600 mb-2">Color: {crystal.color}</p>
      <p className="text-gray-700">Benefits: {crystal.benefit}</p>
    </div>
  </div>
);

const ExploreCrystals = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCrystals = crystalData.filter(crystal =>
    crystal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crystal.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crystal.benefit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="explore-crystals" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Explore Crystals</h2>
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search crystals by name, color, or benefit..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCrystals.map(crystal => (
            <CrystalCard key={crystal.id} crystal={crystal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCrystals;