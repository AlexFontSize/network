import classes from "./Profile.module.css";


const Profile = () => {
    return(
      <div className={classes.profile}>
        <div className={classes.profile_avatar}><img src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" /></div>
        <div className={classes.profile_info}><p>Garaj Prodam</p></div>
      </div>

    );
};

export default Profile;