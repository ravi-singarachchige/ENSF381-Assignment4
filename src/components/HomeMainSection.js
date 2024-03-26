import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reviews from '../data/reviews.js'; 

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const randomReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, 2);
    setSelectedReviews(randomReviews);
  }, []);

  return (
    <main style={{ padding: '10px' }}>
      <section>
        <h2>About Us</h2>
        <h3>Mission</h3>
        <p>Our mission is to provide the best quality products...</p>
        <h3>Vision</h3>
        <p>Our vision is to be the leading provider of quality products...</p>
        <button onClick={() => navigate('/ProductsPage')}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map(({ customerName, reviewContent, stars }) => (
          <div key={customerName}>
            <h3>{customerName}</h3>
            <p>{reviewContent}</p>
            <p>Rating: {'⭐'.repeat(stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;