import './aboutus.css'
import { useEffect,useRef } from 'react';
import Typed from "typed.js"

export default function About(){
    const typedRef=useRef(null);

    useEffect(() =>
        {const typed = new Typed(typedRef.current, {
            strings: [
                `About Us.`
            ],
            typeSpeed:60,
            backSpeed:40,
            loop:true,
            contentType:"html",
        });
        return() =>typed.destroy();
    }
,[]);

    return(
        <>
            <section className='aboutus'>
                <h1><span ref={typedRef}></span></h1>
            </section>
            <section className='about-content'>
                <div className='header'>
                    <div className='box'></div>
                    <p>For over 30 years, we have been delivering dependable technology solutions that empower homes, businesses, and institutions.</p>
                </div>
                <div className='client-grid'>
                    
                </div>
            </section>
            
        </>
    );
}