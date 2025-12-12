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
                    <a href="#services">Services</a>
                    <a href="#products">Products</a>
                </div>
                <div>
                    <h3>Learn More</h3>
                    <a href="#aboutus">About Us</a>
                    <a href="#vision">Vision</a>
                    <a href="#clientele">Clientele</a>
                </div>
                <div>
                    <h3>Support</h3>
                    <a href="#contact">Contact Us</a>
                    <a href="#Feedback">Feedback</a>
                </div>
            </nav>
        </footer>
    );
}