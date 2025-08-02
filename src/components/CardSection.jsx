import {React, useState, useRef, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import style from '../assets/styles/cards.module.css'
import cards from '../data/cards.json'

const CardSection = () => {

  const [isSliderMode, setIsSliderMode] = useState(false);
  const [sliderEnabled, setSliderEnabled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkLayout = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const shouldBeSlider = containerWidth < 800;
      setIsSliderMode(shouldBeSlider);

      if (shouldBeSlider) {
        const cardWidth = 300;
        const gap = 20;
        const totalWidth = cards.length * (cardWidth + gap) - gap;
        setSliderEnabled(totalWidth > containerWidth);
      }
    };

    checkLayout();
    
    const resizeObserver = new ResizeObserver(checkLayout);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [cards.length]);

  return (
    <section>
      <div ref={containerRef} className={`${style.container} ${isSliderMode ? style.sliderMode : ''}`}>
        {isSliderMode ? (
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={sliderEnabled}
            modules={[FreeMode]}
            enabled={sliderEnabled}
            className={style.swiper}
            style={{ 
              overflow: sliderEnabled ? 'visible' : 'hidden',
              padding: '0 20px',
              margin: '0 -10px'
            }}
          >
            {cards.map(card => (
              <SwiperSlide key={card.id} className={style.swiperSlide}>
                <CardComponent card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          cards.map(card => (
            <div key={card.id} className={style.card}>
              <CardComponent card={card} />
            </div>
          ))
        )}
      </div>
    </section>
  )
}

const CardComponent = ({ card }) => (
  <div className={style.card} style={{ backgroundImage: `url(${card.photo})`}}>
    {card.title && (
      <div className={style.content}>
        {card.icon && <img src={card.icon} alt={card.category} className={style.icon} />}
        <div className={style.description}>
          <h1 className={style.title}>{card.title}</h1>
          <p className={style.category}>{card.category}</p>
        </div>
      </div>
    )}
  </div>
);

export default CardSection