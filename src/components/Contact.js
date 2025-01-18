import React, { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    [sectionRef, formRef, infoRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [sectionRef, formRef, infoRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Lunakenya88@gmail.com?subject=New Message from Krystalz Website&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div 
      ref={sectionRef}
      id='contact' 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1a1a]
                 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-8 
                      text-gray-900 dark:text-gray-100
                      transition-colors duration-200">
          Contact Us
        </h1>
        
        <div className="bg-white dark:bg-[#1e1e1e] shadow overflow-hidden sm:rounded-lg
                      transition-colors duration-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div ref={formRef}>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100
                             transition-colors duration-200">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 
                               bg-white dark:bg-[#2d2d2d]
                               text-gray-900 dark:text-gray-100
                               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                               transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 
                               bg-white dark:bg-[#2d2d2d]
                               text-gray-900 dark:text-gray-100
                               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                               transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 
                               bg-white dark:bg-[#2d2d2d]
                               text-gray-900 dark:text-gray-100
                               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                               transition-colors duration-200"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                               text-sm font-medium text-white
                               bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                               transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div ref={infoRef}>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-200">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Nairobi, Kenya
                  </p>
                  <p className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +254 702 064 459
                  </p>
                  <p className="flex items-center">
                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:Lunakenya88@gmail.com" 
                       className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300
                                transition-colors duration-200">
                      Lunakenya88@gmail.com
                    </a>
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-200">
                  Business Hours
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  <li>Monday - Friday: 9am - 6pm</li>
                  <li>Saturday: 10am - 4pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;