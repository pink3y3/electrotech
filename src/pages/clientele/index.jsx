import './clientele.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useRef } from 'react';
import Typed from "typed.js";


export default function About() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [`Clientele<span style="color:black;">.</span>`],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      contentType: "html",
    });
    return () => typed.destroy();
  }, []);

  const slides = [
    { title: "Banking & Finance", logos: ["/clients/pnb.png","/clients/sbi.png","/clients/corp.png","/clients/kb.png","/clients/canara.png","/clients/icici.png","/clients/nabard.png"] },
    { title: "Educational Institutions", logos: ["/clients/nitk.png","/clients/mlore.png","/clients/joseph.png","/clients/nitte.png","/clients/pa.png","/clients/yen.png","/clients/aloy.png","/clients/besant.png","/clients/ab.png","/clients/mit.png"] },
    { title: "IT and Software", logos: ["/clients/global.png","/clients/glowtouch.png"] },
    { title: "Shipping and Others", logos: ["/clients/ss.png","/clients/interocean.png","/clients/globe.png","/clients/ganesh.png","/clients/gac.png","/clients/essar.png"] }
  ];

  return (
    <>
      <section className='clientele'>
        <h1><span ref={typedRef}></span></h1>
      </section>

      <section className='clientele-content'>
        <div className='header'>
          <div className='box'></div>
          <p>Over the years, we've partnered with a diverse range of clients who trust us for dependable service, technical expertise, and ongoing support. Here are some of our major clientele :</p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          freeMode={true}
        >
          {slides.map((slide, i) => (
            slide.logos.map((logo, index) => (
              <SwiperSlide key={`${i}-${index}`}>
                <img src={logo} alt={slide.title + " logo"} />
              </SwiperSlide>
            ))
          ))}
        </Swiper>
      </section>
    </>
  );
}
