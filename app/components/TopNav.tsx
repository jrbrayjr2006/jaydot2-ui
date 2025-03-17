
export default function TopNav() {
    return (
        <nav className="bg-cyan-700 text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div>
                    <a href="/" className="text-lg font-bold">Jaydot2</a>
                </div>
                <div>
                    <a href="/about" className="mr-4 font-bold">About</a>
                    <a href="/services" className="mr-4 font-bold">Services</a>
                    <a href="/contact" className="font-bold">Contact</a>
                </div>
            </div>
        </nav>
    );
}