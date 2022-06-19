import React, { ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { addPost, allTypes, updateNewPostText } from './redux/state';
import App from './App';


export const renderTree = (state: allTypes) => {
    ReactDOM.render(
        <BrowserRouter>
            <App postPage={{
                posts: [],
                addPostCallback: (postMessage: string) => { },
                newPostText: 'chonay',
                updateNewPostText: (newText: string) => { }
            }}
                dialogsPage={{
                    users: [],
                    messages: []
                }}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                newPostText='chonay' />
        </BrowserRouter>, document.getElementById('root')
    );
}
