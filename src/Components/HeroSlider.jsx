import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HeroSlider = () => {
    const images = [
        { src: "../assets/ai.jpg", alt: "Slide 1" },
        { src: "../assets/business.jpg", alt: "Slide 2" },
        { src: "../assets/skill1ads.jpg", alt: "Slide 3" },
        { src: "../assets/seo.jpg", alt: "Slide 3" },
        { src: "../assets/UI-Ux.jpg", alt: "Slide 3" },
        { src: "../assets/tax.jpg", alt: "Slide 3" },
    ];

    return (
        <div className="hero-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                keyboard={{ enabled: true }}
                className="mySwiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img.src} alt={img.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;