import { rerenderEntireTree } from "../render";


let state = {
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
        ]
    },
    friendsPage: {
        friends: [
            { id: 1, name: 'Walenty' },
            { id: 2, name: 'Walenty' },
            { id: 3, name: 'Walenty' },
       
        ]
    }
}

 
 export let addPost = (postMessage) => {
    let newPost ={
        id: 5,
        message: postMessage,
        like: 0
    };

    state.profilePages.posts.push(newPost);
}


export let addFriend = (newFriend) =>{
    let friends = {
        id: 5,
        name: newFriend,
    };
    state.friendsPage.friends.push(friends);
    rerenderEntireTree(state);
}

export default state;