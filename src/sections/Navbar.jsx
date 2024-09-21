import { useState } from "react";
import { navLinks } from "../../constants";


const NavItems = () => {

    return (
        <ul className="nav-ul">
            {navLinks.map((item, index) => (
                <li key={index} className="nav-li">
                    <a href={item.href} className="nav-li_a">
                        {item.name}
                    </a>
                </li>   
            ))}
        </ul>
    )
}


const Navbar = () => {
    const [isOpen, setState] = useState(false);

    const toggleMenu = () => {
        setState((prevState) => !prevState);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"    >
                        Leo
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                        <img src={ isOpen ? 'assets/close.svg':'assets/menu.svg'} alt="menu" className="w-6 h-6"/>
                    </button>
                    <nav>
                        <NavItems/>

                    </nav>

                </div>

            </div>

        </header>
    )
}

export default Navbar