const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    newMessageText: "",
    messageData: [
        { message: "Hello", id: 7 },
        { message: "Dream", id: 6 },
        { message: "Luck", id: 5 },
        { message: "Speedrun", id: 4 },
        { message: "Mashina krutoy", id: 3 },
        { message: "postavish v garaj", id: 2 },
        { message: "kupi", id: 1 },
        { message: "poka", id: 0 },
    ],
};
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText !== "") {
                let newMessage = {
                    message: state.newMessageText,
                    id: state.messageData[0] + 1,
                };
                state.messageData.unshift(newMessage);
                state.newMessageText = "";
                return state;
            };
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
    }
    return state;
};

export const addMessageActionCreator = () => ({ type: ADD_POST });
export const updateNewMessageTextActionCreator = (newMessageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText,
    };
};
export default messagesReducer;