import logoImg from '../images/jaydot2logo.jpg';

export default function TopNav() {
    return (
        <nav className="relative container mx-auto p-6">
        {/* <!-- Flex Container for All Items --> */}
        <div className="flex justify-between items-center">
            {/* <!-- Flex Container for the Logo and the Left Menu --> */}
            <div className="flex items-center space-x-20">
                {/* <!-- Logo Container --> */}
                <div className="logo-container">
                    <img src={logoImg} alt="Shortly Logo" />
                </div>
                {/* <!-- Left Menu --> */}
                <div className="hidden space-x-8 font-bold lg:flex">
                    <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">About</a>
                    <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Products</a>
                    <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">Services</a>
                </div>
            </div>

            {/* <!-- Flex Container for the Right Buttons Menu --> */}
            <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                <div className="hover:text-veryDarkViolet">
                    <a href="#">Login</a>
                </div>
                <a href="" className="px-8 py-3 font-bold text-white bg-cyan-700 rounded-full hover:opacity-70">
                    Register
                </a>
            </div>
            {/* <!-- Hamburger Menu --> */}
            <button id="menu-btn" type="button" className="z-40 block hamburger lg:hidden focus:outline-none">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div id="menu" className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
            <div className="flex flex-col items-center justify-center space-y-6 w-full font-bold text-white rounded-sm">
                <a href="#" className="w-full text-center">About</a>
                <a href="#" className="w-full text-center">Products</a>
                <a href="#" className="w-full text-center">Services</a>
                <a href="#" className="w-full pt-6 border-t border-gray-400 text-center">Login</a>
                <a href="#" className="w-full text-center py-3 rounded-full bg-cyan">Register</a>
            </div>
        </div>
    </nav>
    );
}