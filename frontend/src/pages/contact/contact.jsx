import L1 from '../../assets/images/icons/location-pin.png'
import L2 from '../../assets/images/icons/call.png'
import L3 from '../../assets/images/icons/mail.png'
import './contact.css'
import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

export default function Contact() {
    const typedRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, rating })
        });
        setResponseMsg(response.ok ? "Thank you for your feedback!" : "Something went wrong. Please try again.");
    };

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [`Get In Touch With Us<span style="color:blue;">.</span>`],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            contentType: "html",
        });
        return () => typed.destroy();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("show"); },
            { threshold: 0.3 }
        );
        document.querySelectorAll(".fade").forEach(el => observer.observe(el));
    }, []);

    return (
        <>
            <section className='contact'>
                <h1><span ref={typedRef}></span></h1>
                <div className='grid fade'>
                    <div className='info contact-card'>
                        <div className='card-row'>
                            <img src={L1} alt="location-pin" />
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
                                    Landline: <a href="tel:+918242456344">+91 824-2456344</a>/
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
                            width="600" height="450" style={{ border: 0 }}
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* FEEDBACK FORM */}
            <section onSubmit={handleSubmit} style={{ background: 'linear-gradient(135deg, #1a3a6b, #2563a8)', padding: '60px 40px', margin: '0 40px 80px', borderRadius: '16px' }}>
                <form style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <h2 style={{ color: '#fff', fontSize: '36px', textAlign: 'center', marginBottom: '8px' }}>We'd love your feedback</h2>
                    <p style={{ color: 'rgba(255,255,255,0.75)', textAlign: 'center', marginBottom: '36px' }}>Let us know how we're doing — it only takes a minute.</p>

                    <div style={{ background: '#fff', borderRadius: '16px', padding: '36px 40px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                            <div>
                                <label style={{ fontSize: '13px', fontWeight: 500 }}>Your name</label><br />
                                <input name="name" type="text" placeholder="e.g. Ravi Kumar"
                                    value={formData.name} onChange={handleChange}
                                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #ddd', marginTop: '6px' }} />
                            </div>
                            <div>
                                <label style={{ fontSize: '13px', fontWeight: 500 }}>Email address</label><br />
                                <input name="email" type="email" placeholder="you@example.com"
                                    value={formData.email} onChange={handleChange}
                                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #ddd', marginTop: '6px' }} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ fontSize: '13px', fontWeight: 500 }}>Rate your experience</label>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i}
                                        onClick={() => setRating(i)}
                                        onMouseEnter={() => setHoverRating(i)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        style={{ fontSize: '28px', cursor: 'pointer', color: i <= (hoverRating || rating) ? '#f5a623' : '#ddd' }}>★</span>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ fontSize: '13px', fontWeight: 500 }}>Your message</label><br />
                            <textarea name="message" placeholder="Tell us what you think..."
                                value={formData.message} onChange={handleChange}
                                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #ddd', marginTop: '6px', height: '110px', resize: 'none' }} />
                        </div>

                        <button type="submit"
                            style={{ width: '100%', padding: '13px', background: '#1a3a6b', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', cursor: 'pointer' }}>
                            Send Feedback
                        </button>
                        {responseMsg && <p style={{ textAlign: 'center', marginTop: '12px', color: 'green' }}>{responseMsg}</p>}
                    </div>
                </form>
            </section>
        </>
    );
}