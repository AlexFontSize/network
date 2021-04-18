import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
    <nav className={`default_blocks ${classes.navbar}`}>
        <ul className={classes.navigation}>
            <li><NavLink activeClassName={classes.activeLink} to="/profile">Профиль</NavLink></li>
            <li><NavLink activeClassName={classes.activeLink} to="/messages">Месенджер</NavLink></li>
            <li><NavLink activeClassName={classes.activeLink} to="/news">Новости</NavLink></li>
          </ul>
    </nav>
    );
};

export default Navbar;