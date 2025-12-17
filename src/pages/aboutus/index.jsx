import './aboutus.css';
import { useEffect, useRef } from 'react';
import Typed from "typed.js";
import img1 from '../../assets/images/gen/laptop.jpg';

export default function About() {
  const typedRef = useRef(null);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [`About Us.`],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      contentType: "html",
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const counters = counterSectionRef.current.querySelectorAll("span[data-count]");
    let activated = false;

    const handleScroll = () => {
      if (!counterSectionRef.current) return;

      const containerTop = counterSectionRef.current.offsetTop;
      const containerHeight = counterSectionRef.current.offsetHeight;
      const scrollY = window.pageYOffset;

      if (scrollY > containerTop - containerHeight - 200 && !activated) {
        counters.forEach(counter => {
          counter.innerText = "0";
          const target = parseInt(counter.dataset.count);
          let count = 0;

          const updateCount = () => {
            if (count < target) {
              count++;
              counter.innerText = count;
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
        activated = true;
      } else if ((scrollY < containerTop - containerHeight - 500 || scrollY === 0) && activated) {
        counters.forEach(counter => (counter.innerText = "0"));
        activated = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <>
      <section className='aboutus'>
        <h1><span ref={typedRef}></span></h1>
      </section>

      <section className='about-content'>
        <div className='header fade'>
          <div className='box'></div>
          <p>
            For over 30 years, we have been delivering dependable technology solutions that empower homes, businesses, and institutions.
          </p>
        </div>

        <div className='counter-section' ref={counterSectionRef}>
          <h2 className='fade'>We have served</h2>
          <div className='counter-row fade'>
            <div className='counter'>
              <h3><span data-count="2000">0</span>+</h3>
              <h4>IT customers</h4>
            </div>
            <div className='counter'>
              <h3><span data-count="500">0</span>+</h3>
              <h4>Telecommunication clients</h4>
            </div>
            <div className='counter'>
              <h3><span data-count="500">0</span>+</h3>
              <h4>Something Else</h4>
            </div>
          </div>
        </div>

        <div className='about-para fade'>
          <p>
            Electro Tech has been a trusted name in computer sales, service, and telecommunication solutions since 1994. 
            We provide complete hardware and software diagnostics, repairs, and custom system upgrades—either on-site or at our service center—at highly competitive prices. 
            From office workstations to servers, we build configurations tailored to your needs.
          </p>
          <img src={img1} alt="Company"/>
        </div>

        <div className='team fade'>
          <h5 className='fade'>Our Team</h5>
          <img src={img1} alt="Team" className='fade'/>
        </div>
      </section>
    </>
  );
}
