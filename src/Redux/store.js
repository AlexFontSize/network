import profileReducer from "./profileReducer";

const store = {
    _state: {
        profilePage: {
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
        },
        news: {
            newsText: "",
            newsData: [
                { new: "DED", id: 7 },
                { new: "insaid", id: 6 },
                { new: "Kaneki", id: 5 },
                { new: "Ky", id: 4 },
                { new: "Garaji", id: 3 },
                { new: "onime", id: 2 },
                { new: "02", id: 1 },
                { new: "GG", id: 0 },
            ],
        },
        messages: {
            newMessageText: "",
            mesagesData: [
                { mes: "DED", id: 7 },
                { mes: "insaid", id: 6 },
                { mes: "Kaneki", id: 5 },
                { mes: "Ky", id: 4 },
                { mes: "Garaji", id: 3 },
                { mes: "onime", id: 2 },
                { mes: "02", id: 1 },
                { mes: "GG", id: 0 },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    },
};

/* export default store;
window.store = store; */