"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./ImageGallery.css"

export type TGalleryImage = {
    src: string;
    alt: string;
}

type TImageGalleryProps = {
    images: TGalleryImage[];
}

const ImageGallery = ({images}: TImageGalleryProps) => {
    return (
        <div className='mb-40'>
            <h1 className='text-center mb-16 text-white text-5xl font-extralight'>Gallery</h1>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.src}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}

export default ImageGallery;