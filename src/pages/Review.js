import React from 'react';
import './Review.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'John',
      rating: 5,
      image: '',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius reiciendis consequatur officia recusandae porro at?'
    },
    {
      id: 2,
      name: 'Steve',
      rating: 4,
      image: '',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius reiciendis consequatur officia recusandae porro at?'
    },
    {
      id: 3,
      name: 'David',
      rating: 5,
      image: '',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius reiciendis consequatur officia recusandae porro at?'
    }
  ];

  return (
    <main>
      <section className="reviews section">
        <div className="container">
          <h2 className="section-title">Client Reviews</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div className="review-card" key={review.id}>
                <div className="review-image">
                  <img src={review.image || "/placeholder.svg"} alt={review.name} />
                </div>
                <h3 className="reviewer-name">{review.name}</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}
                    ></i>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Review;