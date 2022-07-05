import { renderTree } from "../render"

export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type UsersType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostPageType = {
    posts: PostType[]
    addPostCallback: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export type DialogsPageType = {
    users: UsersType[]
    messages: MessageType[]
}

export type allTypes = {
    postPage: PostPageType
    dialogsPage: DialogsPageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

let state: allTypes = {
    postPage: {
        posts: [
            { id: 1, post: "How are you?", likesCount: 12 },
            { id: 2, post: "It's my first day", likesCount: 7 },
            { id: 3, post: "Yes", likesCount: 1 },
            { id: 4, post: "Too late", likesCount: 4 },
            { id: 5, post: "So do I", likesCount: 10 },
            { id: 6, post: "O'k", likesCount: 2 },
            { id: 7, post: "Friday maybe", likesCount: 8 }
        ],

        addPostCallback: () => { },
        newPostText: 'chonay',
        updateNewPostText: (newText: string) => { }
    },

    dialogsPage: {
        users: [
            { id: 1, name: "Cholpanay" },
            { id: 2, name: "Vera" },
            { id: 3, name: "Alisher" },
            { id: 4, name: "Ella" },
            { id: 5, name: "Anatoliy" },
            { id: 6, name: "Volodimir" },
            { id: 7, name: "Sveta" }
        ],
        messages: [
            { id: 1, message: "How it's going?" },
            { id: 2, message: "Where are you from?" },
            { id: 3, message: "No" },
            { id: 4, message: "I'll go tomorrow" },
            { id: 5, message: "I am going with you" },
            { id: 6, message: "Bye" },
            { id: 7, message: "See you late" }
        ]
    },

    addPost: () => { },
    updateNewPostText: (newText: string) => { },
    newPostText: 'chonay'
}

export const addPost = () => {

    let newPost: PostType = {
        id: new Date().getTime(),
        // post: postMessage,
        post: state.postPage.newPostText,
        likesCount: 0,
    }
    state.postPage.posts.push(newPost)
    state.postPage.newPostText = ''

    renderTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.postPage.newPostText = newText

    renderTree(state)
}


export default state

