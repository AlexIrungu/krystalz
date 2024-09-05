import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-indigo-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-indigo-600" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;