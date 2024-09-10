import React, { useState } from 'react';
import { X } from 'lucide-react';

const NewsLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the email to your backend or a service like Mailchimp
    console.log('Submitted email:', email);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
      >
        Subscribe to Newsletter
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-purple-800">Subscribe to Our Newsletter</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <p className="mb-4 text-gray-600">
              Stay updated with the latest news on healing stones and exclusive offers!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              You can also reach us at{' '}
              <a
                href="mailto:info@healingstones.com"
                className="text-purple-600 hover:underline"
              >
                info@healingstones.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetter;