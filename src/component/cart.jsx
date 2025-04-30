'use client';

import { useState } from 'react';
import '../component/cart.css';

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="cardWrapper">
      <div
        className={`card ${flipped ? 'flipped' : ''}`}
        aria-label="Flip card showing quotes and images"
      >
        {/* Front Side */}
        <div className="cardFace cardFront">
          <div className="cardLeft">
            <img
              src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=600"
              alt="Empowering vision"
              loading="lazy"
            />
          </div>
          <div className="cardRight">
            <blockquote>“Empowering your vision with innovation.”</blockquote>
          </div>
        </div>

        {/* Back Side */}
        <div className="cardFace cardBack">
          <div className="cardLeft">
            <img
              src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600"
              alt="Transforming ideas"
              loading="lazy"
            />
          </div>
          <div className="cardRight">
            <blockquote>“Transforming ideas into reality.”</blockquote>
          </div>
        </div>
      </div>

      <button
        className="flipBtn"
        onClick={() => setFlipped(!flipped)}
        aria-pressed={flipped}
      >
        Flip Card
      </button>
    </div>
  );
}
