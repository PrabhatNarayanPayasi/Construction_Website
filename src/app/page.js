"use client"; // This is important for App Router components

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import IndiaMap from "../app/map"; // Correct import for the map
import { useRouter } from "next/navigation"; // Correct import for App Router
 
import AutoFlipCard from "@/component/cart";
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/services"); // Navigate to /services route
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="main-container">
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderImages}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className={styles.sliderImage} />
          ))}
        </div>

        <button className={`${styles.prev} prev`} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={`${styles.next} next`} onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Quote Section */}
       
       
      <AutoFlipCard/>

      <div className={styles.mapSection}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Explore India</h2>
        <IndiaMap />
      </div>

      <div className={styles.centerButtonWrapper}>
  <button className={styles.centerButton} onClick={handleClick}>
   Our Working Areas
  </button>
</div>
    </main>
  );
}
