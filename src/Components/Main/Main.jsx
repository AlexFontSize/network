import { Route } from "react-router-dom";
import classes from "./Main.module.css";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Profile from "./Profile/Profile";


const Main = (props) => {
    return(
    <main className={`default_blocks ${classes.main}`}>
      <Route exact path={["/", "/profile"]} render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
      <Route path="/messages" render={() => <Messages messagePage={props.state.messagePage} dispatch={props.dispatch} />} />
      <Route path="/news" render={() => <News news={props.state.news} />} />
    </main>
    );
};

export default Main;