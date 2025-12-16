import '../../index.css'
import './Vision.css';
import Tick from '../../assets/images/icons/tick.png';
import Hand from '../../assets/images/icons/handshake.png';
import Man from '../../assets/images/icons/head-set.png';

export default function Vision(){
    return(
        <div className='Vision'>
            <h3>Our Vision<span className='dot'>.</span></h3>
            
            <div className='cards'>
                <div className='quality'>
                <h5>Commitment to Quality</h5>
                <p>We deliver reliable, high-quality services focused on long-term client trust.</p>
                <img src={Tick} alt="Tick" />
            </div>
            <div className='customer'>
                <h5>Customer-First Approach</h5>
                <p>Every client is a valued partner, and we support them with honesty and consistency.</p>
                <img src={Hand} alt="Handshake" />
            </div>
            <div className='service'>
                <h5>Service Excellence</h5>
                <p>Our expertise ensures dependable service and solutions that exceed expectations.</p>
                <img src={Man} alt="man-with-headset" />
            </div>
            </div>
        </div>
    );
}