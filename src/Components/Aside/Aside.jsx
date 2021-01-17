import classes from "./Aside.module.css"


const Aside = () => {
    return(
    <aside className={classes.aside}>
        <div className="advertisement">
            <img src="https://sun9-49.userapi.com/c850524/v850524962/2c6c3/UO33iLGFRVE.jpg" alt="error" /> <br />
            <a href="#">Реклама</a>
          </div>
          <div className="advertisement">
            <img src="https://sun9-49.userapi.com/c850524/v850524962/2c6c3/UO33iLGFRVE.jpg" alt="error" /> <br />
            <a href="#">Реклама</a>
          </div>
          <div className="advertisement">
            <img src="https://sun9-49.userapi.com/c850524/v850524962/2c6c3/UO33iLGFRVE.jpg" alt="error" /> <br />
            <a href="#">Реклама</a>
          </div>
    </aside>
    );
};

export default Aside;