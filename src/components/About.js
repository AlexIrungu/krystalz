import React from 'react';
import { FaGem, FaUserFriends, FaAward } from 'react-icons/fa';
import store from './images/store1.jpg';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div style={{border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%'}}>
    <Icon style={{fontSize: '2.5rem', color: '#8a2be2', marginBottom: '1rem'}} />
    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>{title}</h3>
    <p style={{color: '#4a5568'}}>{description}</p>
  </div>
);

const About = () => {
  const features = [
    {
      icon: FaGem,
      title: "Premium Quality",
      description: "We source only the finest, ethically mined crystals from around the world."
    },
    {
      icon: FaUserFriends,
      title: "Expert Guidance",
      description: "Our team of experienced crystal healers provides personalized advice and support."
    },
    {
      icon: FaAward,
      title: "Certified Authentic",
      description: "All our crystals are certified authentic and come with a guarantee of quality."
    }
  ];

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem'}}>
      <header style={{textAlign: 'center', marginBottom: '4rem'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>About Krystalz</h1>
        <p style={{fontSize: '1.25rem', color: '#4a5568', maxWidth: '36rem', margin: '0 auto'}}>
          Discover the transformative power of crystals with Krystalz, your trusted source for premium healing stones since 2010.
        </p>
      </header>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem'}}>
        <img
          src={store}
          alt="Krystalz Store"
          style={{width: '100%', maxWidth: '600px', borderRadius: '0.5rem', marginBottom: '2rem'}}
        />
        <div>
          <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem'}}>Our Story</h2>
          <p style={{color: '#4a5568', marginBottom: '1rem'}}>
            Founded in 2010 by crystal enthusiast Jane Doe, Krystalz began as a small online shop and has since grown into a leading provider of high-quality crystals and healing stones. Our passion for the metaphysical properties of crystals and commitment to customer satisfaction have been the driving forces behind our success.
          </p>
          <p style={{color: '#4a5568'}}>
            Today, we're proud to serve a global community of crystal lovers, from beginners to experienced practitioners, helping them harness the power of nature's most beautiful creations.
          </p>
        </div>
      </div>

      <section>
        <h2 style={{fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem'}}>Why Choose Krystalz?</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;