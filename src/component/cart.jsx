"use client";
import { useState, useEffect } from "react";
import "../component/cart.css";

export default function AutoFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsFlipped((prev) => !prev);
    } , 4000);

    return () => clearInterval(interval);
  }, []);

  const handleManualFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card-wrapper">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <div className="card-left">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Quote Visual"
            />
          </div>
          <div className="card-right">
            <h1>"Believe in yourself and all that you are."</h1>
          </div>
        </div>

        <div className="card-face card-back">
          <div className="card-left">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
              alt="Quote Visual"
            />
          </div>
          <div className="card-right">
            <h1>"The future belongs to those who prepare for it today."</h1>
          </div>
        </div>
      </div>

      {/* 👇 Manual flip button */}
      <button className="flip-btn" onClick={handleManualFlip}>
        Flip Card
      </button>
    </div>
  );
}
