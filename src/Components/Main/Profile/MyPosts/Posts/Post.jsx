import { NavLink } from "react-router-dom";
import classes from "./Post.module.css";


const Post = (props) => {
    return (
        <NavLink to={`/profile/${props.id}`} className="post">
            <div className="post_done">
                <img className="p_img" src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" />
                <p>{props.post}</p>
            </div>
        </NavLink>
    );
};

export default Post;