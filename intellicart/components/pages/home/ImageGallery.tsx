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
        <div className='py-16 mb-40 bg-[radial-gradient(circle_at_50%_50%,_rgb(30,30,30)_0%,_black_45%)] backdrop-blur-md'>
            <h1 className='text-center mb-16 text-white text-5xl font-extralight'>Gallery</h1>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {images.map((image) => (
              <SwiperSlide key={image.src}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}

export default ImageGallery;