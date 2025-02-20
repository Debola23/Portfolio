import {useState} from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
        <nav className={Styles.navbar}>
            <a href="/"className={Styles.title}>Bola.dev</a>
            <div className={Styles.menu}>
                <img className={Styles.hamBtn} 
                    src={
                        menuOpen ? ("./images/close.png") : ("./images/menu.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen) }
                />
                <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/#about">About</Link>
                    </li>
                    <li>
                        <Link to="/project">Projects</Link>
                    </li>
                    <li>
                        <a href="mailto:emmanueladebola98@gmail.com">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
