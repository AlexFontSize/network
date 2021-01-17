import classes from "./Header.module.css"


const Header = () => {
    return(
        <header className={`default_blocks ${classes.header}`}>
        <div className="avatar"><img src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" /></div>
        <div className={classes.links}>
          <a href="#">Форум</a>
          <a href="#">Поддержка</a>
          <a href="#">Помощь</a>
          <a href="#">Обновления</a>
          <a href="#">Nevkontacte pay</a>
          <a href="#">Выйти</a>
        </div>
        <div className={classes.head_btn}><img src="https://i.ya-webdesign.com/images/setting-clipart-gear-wheel-22.png" /></div>
      </header>
    );
};

export default Header;