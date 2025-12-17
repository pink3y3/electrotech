import { useEffect, useRef } from "react";
import Typed from "typed.js";
import './Hero.css';
import FE from '../../assets/images/gen/image.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        `Your Technology,<br />Our Expertise<span style="color:red;">.</span>`
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      contentType: "html", 
    });

    return () => typed.destroy();
  }, []);

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


  return (
    <div className='Hero fade'>
      <div className="hero-text">
        <h1>
          <span ref={typedRef}></span>
          <span ref={typedRef}></span>
        </h1>
        <p>
          With a team of dedicated service and sales engineers, we support over 
          2,000 computer and 400 telecommunication clients across Dakshina Kannada 
          and Udupi. From computers and networking to telecommunication devices, 
          we provide reliable solutions tailored to your needs.
        </p>
        <Link to='/about'>
          <button>Read More</button>
        </Link>
      </div>
      <img src={FE} alt="FE" className="hero-image"/>
    </div>
  );
}
