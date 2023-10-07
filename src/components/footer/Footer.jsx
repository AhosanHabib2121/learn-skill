
const Footer = () => {
    return (
        <footer className="bg-[#042754] px-8">
            <div className="footer grid-cols-2 py-10 text-neutral-content max-w-6xl mx-auto">
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Quick Links</header> 
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Our Team</a>
                    <a className="link link-hover">Testimonial</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Contact us</header> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;