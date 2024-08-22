import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "What crystal is best for healing?",
      answer: "The type of crystal you choose for healing may depend on the healing you need. Experts recommend clear quartz and amethyst for general healing."
    },
    {
      question: "What are the top 7 healing crystals?",
      answer: "The seven healing stones correspond to the colors of the seven chakras. While some stones can vary, a popular combination includes green fluorite, amethyst, red jasper, tiger's eye stone, sodalite, rock quartz, and red aventurine."
    },
    {
      question: "What is the best crystal to wear every day?",
      answer: "Clear quartz is believed to be a universal healer and may help balance your energies."
    },
    {
      question: "What do different healing crystals do?",
      answer: "Some people believe that different healing crystals have energies that can have specific benefits for your mind and body. For example, crystals said to benefit health include clear quartz, jasper, obsidian, amethyst, and bloodstone. Experts note that others, including sapphire and jade, promote prosperity while citrine supports creativity. They believe others, like moonstone, rose quartz, and ruby, promote love."
    }
  ];

  return (
    <div id='faq' className="max-w-4xl mx-auto p-6 theme-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-black-700">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-black-600">{item.question}</h2>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;