import Image from 'next/image';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent text-on-primary absolute top-0 z-50 shadow-lg backdrop-blur w-screen">
            <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className='flex justify-start items-center mr-12'>
                            <Image
                                src='https://www.jotform.com/uploads/iaoadmin/form_files/222058180857156_mainPWAIcon.6382b2a1a860f.png'
                                alt='Iron & Oak Logo'
                                width={35}
                                height={35}
                                className="cursor-pointer rounded-md "
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink href="/" label="Home" />
                                <NavLink href="/about" label="About" />
                                <NavLink href="/media" label="Media" />
                                <NavLink href="/contact" label="Contact" />
                                <NavLink href="/careers" label="Careers" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;