import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
    <nav className={`default_blocks ${classes.navbar}`}>
        <ul className="navigation">
            <li><NavLink to="/profile">Профиль</NavLink></li>
            <li><NavLink to="/messages">Сообщения</NavLink></li>
          </ul>
    </nav>
    );
};

export default Navbar;