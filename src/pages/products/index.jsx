import './products.css'
import { useEffect,useRef } from 'react';
import Typed from "typed.js"

export default function About(){
    const typedRef=useRef(null);

    useEffect(() =>
        {const typed = new Typed(typedRef.current, {
            strings: [
                `Products.`
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
            <section className='products'>
                <h1><span ref={typedRef}></span></h1>
            </section>
            <section className='product-content'>
                <div className='header'>
                    <div className='box'></div>
                    <p></p>
                </div>
            </section>
            
        </>
    );
}