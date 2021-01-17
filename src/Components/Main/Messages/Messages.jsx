import classes from "./Messages.module.css";


const Messages = () => {
    return(
      <div className={classes.messages}>
        <div className={classes.message}>
          <div className="avatar"><img src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" /></div>
          <div className={classes.mes}><p>Гараж продам. Звоните! *Ссылка удалена*</p></div>
        </div>
        <div className={classes.message}>
          <div className="avatar"><img src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" /></div>
          <div className={classes.mes}><p>Гараж продам. Звоните! *Ссылка удалена*</p></div>
        </div>
        <div className={classes.message}>
          <div className="avatar"><img src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" /></div>
          <div className={classes.mes}><p>Гараж продам. Звоните! *Ссылка удалена*</p></div>
        </div>
      </div>
    );
};

export default Messages;