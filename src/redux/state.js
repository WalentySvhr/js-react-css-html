let store = {
    _state: {
        dialogsPages: {
            dialogs: [
                { id: 1, name: 'Walenty' },
                { id: 2, name: 'Andrye' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Wiktor' },
            ], messages: [
                { id: 1, },
                { id: 2, message: 'Its for u' },
                { id: 3, message: 'Nice' },
                { id: 3, message: 'Have good day' },
            ]
        },
        profilePages: {
            posts: [
                { id: 1, message: 'Hi, how are you', like: 12 },
                { id: 2, message: 'its my firs post', like: 11 },
                { id: 3, message: 'Hi, how are you', like: 12 },
                { id: 4, message: 'its my firs post', like: 11 },
                { id: 5, message: 'Hi, how are you', like: 12 },
                { id: 6, message: 'its my firs post', like: 11 },
            ],
            newPostText: 'qweqew'
        },
        friendsPage: {
            friends: [
                { id: 1, name: 'Walenty' },
                { id: 2, name: 'Walenty' },
                { id: 3, name: 'Walenty' },

            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePages.newPostText,
            like: 0
        };
        this._state.profilePages.posts.push(newPost);
        this._state.profilePages.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePages.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addFriend(_newFriend) {
        let friends = {
            id: 5,
            name: this._newFriend,
        };
        this._state.friendsPage.friends.push(friends);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}



export default store;

window.store = store; 