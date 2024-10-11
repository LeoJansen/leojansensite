import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { cn } from "../../lib/utils";



const NavItems = ({ onClick = () => {} }) => {

    return (
        <ul className="nav-ul">
            {navLinks.map(({name, href}, index) => (
                <li key={index} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={onClick}>
                        {name}
                    </a>
                </li>   
            ))}
        </ul>
    )
};


const Navbar = ({className}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
  

    return (
        <header className={cn(`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-1000 ease-in-out`, className)} >
                <div className="flex justify-between items-center py-3 mx-12">
                   <img src="/logo.svg" alt="logo" className="w-[51px]" />
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                        <img src={ isOpen ? 'assets/close.svg':'assets/menu.svg'} alt="menu" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">

                    <NavItems onClick={closeMenu} />

                </nav>

            </div>
        </header>
    );
};

export default Navbar;