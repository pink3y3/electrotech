import './Services.css';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Services(){
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [`We provide all your technical solutions<span style="color:blue;">.</span>`],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      contentType: "html",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className='Services'>
        <h1>
          <span ref={typedRef}></span>
        </h1>
        <div className='cards'>
        <div className='c1'>
            <h2>Computer and Hardware services</h2>
            <p>Comprehensive device services including repairs, upgrades, diagnostics, software updates, and virus protection for PCs, laptops, and peripherals.</p>
        </div>
        <div className='c2'>
            <h2>Networking and System Solutions</h2>
            <p>Complete networking solutions, consulting, and custom system setups for homes, offices, and businesses.</p>
        </div>
        <div className='c3'>
            <h2>Data and Support Services</h2>
            <p>Reliable data services, emergency support, and expert technicians dedicated to customer satisfaction.</p>
        </div>
        </div>
    </div>
  );
}
