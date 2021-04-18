const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    newPostText: "",
    postData: [
        { post: "Hello", id: 7 },
        { post: "Hello keks", id: 6 },
        { post: "Garaj topoviy", id: 5 },
        { post: "Prodam", id: 4 },
        { post: "Mashina net", id: 3 },
        { post: "esti", id: 2 },
        { post: "kupi", id: 1 },
        { post: "poka", id: 0 },
    ],
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== "") {
                let newPost = {
                    post: state.newPostText,
                    id: state.postData[0] + 1,
                };
                state.postData.unshift(newPost);
                state.newPostText = "";
                return state;
            };
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
    }
    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText,
    };
};
export default profileReducer;