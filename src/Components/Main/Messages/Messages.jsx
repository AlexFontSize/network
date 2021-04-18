import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../Redux/messagesReducer";
import Done_messages from "./Done_messages/Done_messages"


const Messages = (props) => {
    const addMessage = () => props.dispatch(addMessageActionCreator());
    const updateNewMessageText = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewMessageTextActionCreator(text));
    };
    let messageElements = props.messagePage.messageData.map(objMessage => <Done_messages post={objMessage.post} id={objMessage.id} />);
    return (
        <div className="Messages">
          {messageElements}
            <div className="message_creater">
                <img className="p_img" src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" />
                <textarea name="mes" id="mes" cols="80" rows="1" value={props.newMessageText} onChange={updateNewMessageText}></textarea>
                <button onClick={addMessage}>submit</button>
            </div>
        </div>
    );
};

export default Messages;