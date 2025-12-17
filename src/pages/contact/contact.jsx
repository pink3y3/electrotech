import L1 from '../../assets/images/icons/location-pin.png'
import L2 from '../../assets/images/icons/call.png'
import L3 from '../../assets/images/icons/mail.png'
import './contact.css'
import { useEffect,useRef } from 'react'
import Typed from 'typed.js'

export default function Contact(){
    const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        `Get In Touch With Us<span style="color:blue;">.</span>`
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

    return(
        <>
        <section className='contact'>
            <h1 className>
                <span ref={typedRef}></span>
            </h1>
            <div className='grid fade'>
                <div className='info contact-card'>
                <div className='card-row'>
                    <img src={L1} alt="location-pin"/>
                    <div>
                        <h2>Location</h2>
                        <p>
                            M/s. Electrotech Services.Inc<br />
                            No. II/6-146/9,1st Floor,<br />
                            New Mangala Complex, Kottara Chowki Junction,<br />
                            Mangalore - 575 006
                        </p>
                    </div>
                </div>

                <div className='card-row'>
                    <img src={L2} alt="call-icon" />
                    <div>
                        <h2>Call Us</h2>
                        <p>
                            Landline:   
                            <a href="tel:+918242456344">+91 824-2456344</a>/ 
                            <a href="tel:+91824258851">4258851</a><br />
                            Shivanand Rai : <a href="tel:+919845752527">98457 52527</a><br />
                            Bharath Shetty: <a href="tel:+919845177221">98451 77221</a>
                        </p>
                    </div>
                </div>

                <div className='card-row'>
                    <img src={L3} alt="mail-icon" />
                    <div>
                        <h2>Email</h2>
                        <a href="mailto:info@electrotech.net.in">info@electrotech.net.in</a><br />
                        <a href="mailto:service@electrotech.net.in">service@electrotech.net.in</a>
                    </div>
                </div>
            </div>

            <div className='maps'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62226.54754619695!2d74.80568207081686!3d12.89748137565849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350a13025ca43%3A0x17e963992e7bd042!2sElectrotech%20Services.Inc!5e0!3m2!1sen!2sin!4v1765698937057!5m2!1sen!2sin" 
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            </div>
            
        </section>

        </>
    );
}
