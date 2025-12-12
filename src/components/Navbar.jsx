import logo from '../assets/images/gen/et-logo.png'
export default function Navbar(){
    return (
        <header className="navbar">
            <img src={logo} alt="ET Logo" />
            <nav>
                <a href="#about">About Us</a>
                <a href="#clientele">Clientele</a>
                <a href="#services">Services</a>
                <a href="#products">Products</a>
                <a href="#contactus">Contact Us</a>
            </nav>
        </header>
    );
}