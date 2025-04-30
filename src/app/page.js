"use client"; // This is important for App Router components

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import IndiaMap from "../app/map"; // Correct import for the map
import { useRouter } from "next/navigation"; // Correct import for App Router
 
import AutoFlipCard from "@/component/cart";
import Link from "next/link";
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/services"); // Navigate to /services route
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/img22.jpg",
    "/img52.jpg",
    "/img63.jpg",
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
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}> Cities Where we are Currently </h2>
        <IndiaMap />
      </div>

      <div className={styles.centerButtonWrapper}>
 

  <Link href="/services"  className={styles.centerButton}>Our Working Areas</Link>
</div>
    </main>
  );
}
