import { useState } from "react";
import { navLinks } from "../constants";



const NavItems = () => {

    return (
        <ul className="nav-ul">
            {navLinks.map(({name, href}, index) => (
                <li key={index} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={()=> {}}>
                        {name}
                    </a>
                </li>   
            ))}
        </ul>
    )
};


const Navbar = () => {
    const [isOpen, setState] = useState(false);

    const toggleMenu = () => {
        setState((prevState) => !prevState);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black-300/30 px-auto backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-3 mx-auto">
                   <img src="/logo.svg" alt="logo" className="w-[51px]" />
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                        <img src={ isOpen ? 'assets/close.svg':'assets/menu.svg'} alt="menu" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>

                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">

                    <NavItems/>

                </nav>

            </div>
        </header>
    );
};

export default Navbar;