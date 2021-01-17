import classes from "./Footer.module.css"


const Footer = () => {
    return(
    <footer className={classes.footer}>
        <div id="mobile_nav">
            <a href="#">Профиль</a>
            <a href="#">Новости</a>
            <a href="#">Навигация</a>
            <a href="#">Сообщения</a>
        </div>
    </footer>
    );
};

export default Footer;