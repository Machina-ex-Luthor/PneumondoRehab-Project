"use client";

import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const slides = [
  {
    title: "Explication dun premier concept de Pneumologie",
    description: "Améliorez votre santé respiratoire avec nos programmes personnalisés1",
    image: "/RespiRehabSlide1.png"
  },
  {
    title: "Explication d'un deuxième concept de Pneumologie",
    description: "Améliorez votre santé respiratoire avec nos programmes personnalisés2",
    image: "RespiRehabSlide2.png"
  },
  {
    title: "Explication d'un troisième concept de Pneumologie",
    description: "Améliorez votre santé respiratoire avec nos programmes personnalisés3",
    image: "RespiRehabSlide3.png"
  },
  {
    title: "Explication d'un quatrième concept de Pneumologie",
    description: "Améliorez votre santé respiratoire avec nos programmes personnalisés4",
    image: "RespiRehabSlide4.png"
  },
  {
    title: "Explication d'un cinquième concept de Pneumologie",
    description: "Améliorez votre santé respiratoire avec nos programmes personnalisés5",
    image: "RespiRehabSlide5.png"
  }
  // Ajoutez d'autres slides selon vos besoins
];

interface SlideProps {
  slide: {
    image: string;
    title: string;
    description: string;
  };
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => (
  <div
    className={`${styles.slide} ${isActive ? styles.active : ''}`}
    style={{ backgroundImage: `url(${slide.image})` }}
  >
    <div className={styles.content}>
      <h2>{slide.title}</h2>
      <p>{slide.description}</p>
    </div>
  </div>
);

const useCarousel = (slidesLength: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesLength);
    }, 5000);

    return () => clearInterval(timer);
  }, [slidesLength]);

  return currentSlide;
};

const Carousel = () => {
  const currentSlide = useCarousel(slides.length);

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <Slide key={index} slide={slide} isActive={index === currentSlide} />
      ))}
    </div>
  );
};

export default Carousel;
