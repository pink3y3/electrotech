import {Link} from 'react-router-dom'
import logo from '../assets/images/gen/et-logo.png'
export default function Navbar(){
    return (
        <header className="navbar">
                <Link to="/home">
                <img src={logo} alt="ET Logo" />
                </Link>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/clientele">Clientele</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    );
}