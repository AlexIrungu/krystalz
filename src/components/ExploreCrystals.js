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
    { id: 1, name: 'Amethyst', color: 'Purple', benefit: 'Calming and intuitive', image: amethyst, description: 'Amethyst is a powerful and protective stone. It guards against psychic attack, transmuting the energy into love and protecting the wearer from all types of harm, including geopathic or electromagnetic stress and ill wishes from others.' },
    { id: 2, name: 'Rose Quartz', color: 'Pink', benefit: 'Love and emotional healing', image: rose, description: 'Rose Quartz is the stone of universal love. It restores trust and harmony in relationships, encouraging unconditional love. It purifies and opens the heart at all levels to promote love, self-love, friendship, deep inner healing and feelings of peace.' },
    { id: 3, name: 'Citrine', color: 'Yellow', benefit: 'Abundance and positivity', image: citrine, description: 'Citrine is a joyful stone with bright energy which lights up many aspects of lives of those who work with it. It has energies of optimism and warmth, imagination and manifestation.' },
    { id: 4, name: 'Clear Quartz', color: 'Transparent', benefit: 'Amplifies energy and healing', image: clear, description: 'Clear Quartz is known as the "master healer" and will amplify energy and thought, as well as the effect of other crystals. It absorbs, stores, releases and regulates energy. Clear Quartz draws off negative energy of all kinds, neutralizing background radiation, including electromagnetic smog or petrochemical emanations.' },
    { id: 5, name: 'Obsidian', color: 'Black', benefit: 'Protection and grounding', image: obsidian, description: 'Obsidian is a powerful cleanser of psychic smog created within your aura, and is a strong psychic protection stone. It forms a shield against negativity. It blocks psychic attack and absorbs negative energies from the environment.' },
    { id: 6, name: 'Lapis Lazuli', color: 'Blue', benefit: 'Wisdom and truth', image: lapis, description: 'Lapis Lazuli is a powerful crystal for activating the higher mind and enhancing intellectual ability. It stimulates the desire for knowledge, truth and understanding, and aids the process of learning. It is excellent for enhancing memory.' },
    { id: 7, name: 'Jade', color: 'Green', benefit: 'Harmony and good luck', image: jade, description: 'Jade is a stone of harmony and balance. It promotes peace and balance in life, and helps to release negative thoughts and irritability. Jade is believed to attract good luck and friendship.' },
    { id: 8, name: 'Moonstone', color: 'White/Pearly', benefit: 'New beginnings and inner growth', image: moon, description: 'Moonstone is associated with the Moon and thus is a wonderfully helpful stone for women. It helps balance hormones and relieve tension, headaches and anxiety. Moonstone is also said to help with intuition, clairvoyance and good fortune.' },
    { id: 9, name: 'Tiger/s Eye', color: 'Golden Brown', benefit: 'Confidence and willpower', image: tiger, description: 'Tiger/s Eye is a stone of protection that is also very stabilizing and grounding. It enhances integrity, willpower, self-confidence, practicality and correct use of power. It is a stone that enhances good luck, and brings prosperity, often in the form of money.' },
];

const CrystalCard = ({ crystal, onClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => onClick(crystal)}>
    <img src={crystal.image} alt={crystal.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{crystal.name}</h3>
      <p className="text-gray-600 mb-2">Color: {crystal.color}</p>
      <p className="text-gray-700">Benefits: {crystal.benefit}</p>
    </div>
  </div>
);

const CrystalModal = ({ crystal, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{crystal.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <img src={crystal.image} alt={crystal.name} className="w-full h-64 object-cover mb-4 rounded" />
        <p className="text-gray-600 mb-2">Color: {crystal.color}</p>
        <p className="text-gray-700 mb-4">Benefits: {crystal.benefit}</p>
        <p className="text-gray-800">{crystal.description}</p>
      </div>
    </div>
  </div>
);

const ExploreCrystals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrystal, setSelectedCrystal] = useState(null);

  const filteredCrystals = crystalData.filter(crystal =>
    crystal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crystal.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crystal.benefit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCrystalClick = (crystal) => {
    setSelectedCrystal(crystal);
  };

  const closeModal = () => {
    setSelectedCrystal(null);
  };

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
            <CrystalCard key={crystal.id} crystal={crystal} onClick={handleCrystalClick} />
          ))}
        </div>
      </div>
      {selectedCrystal && <CrystalModal crystal={selectedCrystal} onClose={closeModal} />}
    </section>
  );
};

export default ExploreCrystals;