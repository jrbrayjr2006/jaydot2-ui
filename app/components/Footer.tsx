import twitterIcon from '../images/icon-twitter.svg';
import facebookIcon from '../images/icon-facebook.svg';
import instagramIcon from '../images/icon-instagram.svg';
import jaydot2Logo from '../images/jaydot2logo.jpg';

export default function Footer() {
    return (
        <footer className="bg-gray-50 section-container">
            <div className="section-container">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    {/* Image */}
                    <img src={jaydot2Logo} alt="Logo Image" className="scale-50" />
                    <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
                        {/* Menus */}
                        <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                            {/* Menu 1 */}
                            <div className="flex flex-col space-y-4 text-center md:flex-row md:text-left md:space-y-0 md:space-x-4">
                                <div><a href="#" className="hover:text-strongCyan">Products</a></div>
                                <div><a href="#" className="hover:text-strongCyan">Services</a></div>
                            </div>
                            {/* Menu 2 */}
                            <div className="flex flex-col space-y-4 text-center md:flex-row md:text-left md:space-y-0 md:space-x-4">
                                <div><a href="#" className="hover:text-strongCyan">FAQs</a></div>
                                <div><a href="#" className="hover:text-strongCyan">Privacy Policy</a></div>
                            </div>
                            {/* Menu 3 */}
                            <div className="flex flex-col space-y-4 text-center md:flex-row md:text-left md:space-y-0">
                                <div><a href="#" className="hover:text-strongCyan">Contact Us</a></div>
                            </div>
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex justify-between w-32 py-1 md:ml-4">
                            {/* <a href="#"><img src={facebookIcon} alt="Facebook Icon" className="duration-200 ficon" /></a> */}
                            <a href="#"><img src={twitterIcon} alt="Twitter Icon" className="duration-200 ficon" /></a>
                            <a href="#"><img src={instagramIcon} alt="Instagram Icon" className="duration-200 ficon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}