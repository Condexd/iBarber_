import React from 'react';
import { FaStar } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

export const Reviews = ({ reviewsData }) => {
  return (
    <div className="reviews-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" duration={0.9} animateOnce>
        {reviewsData.map((review, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div>
              <h5>{review.title}</h5>
              <div>
                <FaStar style={{ color: 'gold', marginRight: '5px' }} /> 
                <span>{review.rating}</span>
              </div>
              <p style={{ wordWrap: 'break-word' }}>{review.body}</p>
            </div>
          </div>
        ))}
      </ScrollAnimation>
    </div>
  );
};
