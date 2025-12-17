import React, {useEffect, useRef} from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import './client.css'
import Banks from '../../assets/images/gen/banks.png'
import Edu from '../../assets/images/gen/edu.png'
import Shipping from '../../assets/images/gen/ship.png'
import IT from '../../assets/images/gen/it.png'

const slideData =[
    {
        logo:Banks,
        title: "Banking & Finance",
    },
    {
        logo:Edu,
        title: "Educational Institutions",
    },
    {
        logo:Shipping,
        title:"Shipping Oil",
    },
    {
        logo:IT,
        title:"IT & Software"
    },
];
export default function Client(){
    const swiperWrappedRef=useRef(null);

    function adjustMargin(){
        const screenWidth = window.innerWidth;
        if (swiperWrappedRef.current) {
            swiperWrappedRef.current.style.marginLeft = 
            screenWidth<=520
            ?'0px'
            : screenWidth<= 650
            ? '-50px'
            : screenWidth<=800
            ? '-100px'
            : '-150px';
        }
    }
    useEffect(() => {
        adjustMargin();
        window.addEventListener('resize',adjustMargin);
        return () => window.removeEventListener('resize',adjustMargin);

    },[]);

      useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".fade").forEach(el => observer.observe(el));
}, []);

    return(
        <main>
            <div className='cont fade'>
                <Swiper 
                modules={[Pagination]}
                grabCursor
                initialSlide={0}
                centeredSlides
                slidesPerView='auto'
                speed={800}
                slideToClickedSlide
                pagination={{clickable:true}}
                breakpoints={{
                    320 : {spaceBetween: 0},
                    650 : {spaceBetween: 30},
                    1000: {spaceBetween: 20},
                }}
                onSwiper={(swiper) => {
                    swiperWrappedRef.current=swiper.wrapperEl;
                }}
                >
                    {slideData.map((slide,index) => (
                        <SwiperSlide key={index}>
                            <div className='swipe-slide fade'>
                                <div className='title'>
                                <h1>{slide.title}</h1>
                            </div>
                                <img src={slide.logo} alt={slide.title} />
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
}