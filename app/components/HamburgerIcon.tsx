import React from 'react';

interface Props {
    isOpen: boolean;
    setIsOpen: () => void;
}

const HamburgerIcon: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen();
    };

    return (
            <div
                className={`nav-icon mt-1.5 ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
    );
};

export default HamburgerIcon;