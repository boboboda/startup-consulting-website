import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import styles from '@/styles/ImageSlider.module.css';

interface SlideData {
  image: string;
  text: string;
}

const slides: SlideData[] = [
  { image: '/img_1.png', text: 'Welcome to Slide 1' },
  { image: '/img_2.png', text: 'This is Slide 2' },
  { image: '/img_3.png', text: 'Slide 3 is Here' },
];

const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 8000); // 6초 후 이미지 전환

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <Slide key={index} image={slide.image} text={slide.text} active={index === currentImageIndex} />
      ))}
    </div>
  );
};

export default ImageSlider;
