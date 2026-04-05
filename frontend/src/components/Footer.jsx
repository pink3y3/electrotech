import {Link} from 'react-router-dom'
import logo from '../assets/images/gen/et-logo.png'
export default function Footer(){
    return (
        <footer className="footer">
            <div>
                <img src={logo} alt="ET Logo" />
                <p>© 2025 Electro Tech. All rights reserved.</p>
            </div>
            <nav>
                <div>
                    <h3>Features</h3>
                    <Link to='/services'>Services</Link>
                    <Link to='/products'>Products</Link>
                </div>
                <div>
                    <h3>Learn More</h3>
                    <Link to='/about'>About Us</Link>
                    <Link to='/vision'>Vision</Link>
                    <Link to='/clientele'>Clientele</Link>
                </div>
                <div>
                    <h3>Support</h3>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/feedback'>Feedback</Link>
                </div>
            </nav>
        </footer>
    );
}