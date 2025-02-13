import React, { useState } from 'react';
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import anime from './images/anime.jpg'
import choose from './images/joanna-kosinska-K_OzFXOcQX8-unsplash.jpg'
import store from './images/store1.jpg'

const blogs = [
  {
    id: 1,
    title: "Healing Properties of Amethyst",
    author: "Crystal Wellness Team",
    date: "February 15, 2024",
    tags: ["Healing", "Crystals"],
    excerpt: "Discover how amethyst can promote emotional balance and spiritual growth...",
    image: anime,
    content: "Amethyst is a powerful crystal known for its calming and protective energies. Traditionally used to soothe the mind and promote clarity, this beautiful purple stone helps reduce anxiety and improve meditation practices."
  },
  {
    id: 2,
    title: "Choosing Your First Crystal",
    author: "Emma Starlight",
    date: "January 22, 2024",
    tags: ["Beginners", "Crystal Selection"],
    excerpt: "A comprehensive guide for newcomers to the world of crystal healing...",
    image: choose,
    content: "When selecting your first crystal, trust your intuition. Look for stones that draw your attention and feel energetically connected to your current life journey."
  },
  {
    id: 3,
    title: "Cleansing and Charging Crystals",
    author: "Crystal Wellness Team",
    date: "March 5, 2024",
    tags: ["Maintenance", "Energy Work"],
    excerpt: "Learn essential techniques to keep your crystals energetically pure...",
    image: store,
    content: "Crystals absorb and store energy, making regular cleansing crucial. Methods include moonlight bathing, sage smudging, and using sound vibrations to reset their energetic frequency."
  }
];

const BlogCard = ({ blog, onReadMore }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
    <div className="relative h-56 overflow-hidden">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 mb-3 space-x-4">
        <div className="flex items-center">
          <FaCalendar className="mr-2 text-gray-400" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center">
          <FaUser className="mr-2 text-gray-400" />
          <span>{blog.author}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{blog.title}</h3>
      <p className="text-gray-600 mb-4">{blog.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaTag className="mr-2 text-gray-400" />
          {blog.tags.map(tag => (
            <span 
              key={tag} 
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onReadMore(blog)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
);

const BlogModal = ({ blog, onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h2>
        <div className="flex items-center text-gray-500 mb-6 space-x-4">
          <div className="flex items-center">
            <FaCalendar className="mr-2 text-gray-400" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <FaUser className="mr-2 text-gray-400" />
            <span>{blog.author}</span>
          </div>
        </div>
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <p className="text-gray-700 leading-relaxed">{blog.content}</p>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Crystal Wisdom Blog</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore insights, healing techniques, and spiritual journeys with crystals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onReadMore={handleReadMore} 
            />
          ))}
        </div>
      </div>
      {selectedBlog && (
        <BlogModal 
          blog={selectedBlog} 
          onClose={() => setSelectedBlog(null)} 
        />
      )}
    </div>
  );
};

export default Blog;