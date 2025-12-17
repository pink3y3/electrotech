import './clientele.css'
import Client from './clientele-slide.jsx'
import { useEffect,useRef } from 'react';
import Typed from "typed.js"

export default function Clientele(){
    const typedRef=useRef(null);

    useEffect(() =>
        {const typed = new Typed(typedRef.current, {
            strings: [
                `Clientele<span style="color:black;">.</span>`
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
            <section className='clientele'>
                <h1><span ref={typedRef}></span></h1>
            </section>
            <section className='clientele-content'>
                <div className='header'>
                    <div className='box'></div>
                    <p>Over the years, we've partnered with a diverse range of clients who trust us for dependable service, technical expertise, and ongoing support. Here are some of our major clientele :</p>
                </div>
                <div className='client'>
                    <Client />
                </div>
            </section>
            
        </>
    );
}