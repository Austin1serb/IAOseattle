import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-secondary-dark text-on-secondary py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h2 className="font-bold mb-2">Company</h2>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Services</h2>
                        <ul>
                            <li><Link href="/services/security">Security Services</Link></li>
                            <li><Link href="/services/consulting">Consulting</Link></li>
                            <li><Link href="/services/training">Training</Link></li>
                            <li><Link href="/services/technology">Technology Solutions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Resources</h2>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/resources/guides">Guides</Link></li>
                            <li><Link href="/resources/reports">Reports</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Legal</h2>
                        <ul>
                            <li><Link href="/terms">Terms of Service</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p>&copy; {new Date().getFullYear()} Iron & Oak LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;