import { NavLink } from "react-router-dom";


const Done_news = (props) => {
    return (

            <div className="post_done">
                <img className="p_img" src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" />
                <p>{props.new}</p>
            </div>

    );
};

export default Done_news;