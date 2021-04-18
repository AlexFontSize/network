import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";
import Post from "./Posts/Post"


const MyPost = (props) => {
    const addMessage = () => props.dispatch(addPostActionCreator());
    const updateNewPostText = (e) => {
      let text = e.target.value;
      props.dispatch(updateNewPostTextActionCreator(text));
    };
    let postElements = props.postData.map(objPost => <Post post={objPost.post} id={objPost.id} />);
    return (
        <div className="myPost">
            <div className="post_creater">
                <img className="p_img" src="https://yt3.ggpht.com/a/AATXAJzgWLi3WR7LmE9H6PvDi9mzTcK-Hx5vxrdyXN6R=s900-c-k-c0xffffffff-no-rj-mo" />
                <textarea name="poster" id="poster" cols="80" rows="1" value={props.newPostText} onChange={updateNewPostText}></textarea>
                <button onClick={addMessage}>submit</button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPost;