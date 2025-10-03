import React, { useState, useEffect, useRef } from 'react';
import GreaterThanIcon from '../../assets/GreaterThanIcon';
import LessThanIcon from '../../assets/LessThanIcon';
import './slider.css';

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoPlayInterval?: number;
  className?: string;
}

export const Slider = <T,>({ 
  items, 
  renderItem, 
  autoPlayInterval = 5000,
  className = ''
}: SliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoPlayRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const autoPlay = () => {
      if (sliderRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    };

    autoPlayRef.current = autoPlay;
  }, [items.length]);

  useEffect(() => {
    if (!autoPlayInterval) return;
    
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % items.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNextSlide();
    }

    if (touchStart - touchEnd < -150) {
      handlePrevSlide();
    }
  };

  return (
    <div 
      className={`slider-container ${className}`}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-content">
        {renderItem(items[currentIndex])}
      </div>
      
      <button className="slider-control prev" onClick={handlePrevSlide} aria-label="Previous item">
        <LessThanIcon/>
      </button>
      <button className="slider-control next" onClick={handleNextSlide} aria-label="Next item">
        <GreaterThanIcon/>
      </button>
      
      <nav className="slider-dots" aria-label="Item navigation">
        {items.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </nav>

      <output className="slider-counter">
        <span className="current-item">{currentIndex + 1}</span>
        <span className="total-items">/ {items.length}</span>
      </output>
    </div>
  );
};
