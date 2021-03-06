import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Dialogs} from './Components/Dialogs/Dialogs';
import state, {allTypes} from './redux/state';
import {Profile} from './Components/Profile/Profile';

const App = (props: allTypes) => {

    return (

        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() =>
                        <Dialogs users={state.dialogsPage.users}
                                 messages={state.dialogsPage.messages}/>}/>

                    <Route path='/profile' render={() =>
                        <Profile
                            posts={state.postPage.posts}
                            addPostCallback={props.addPost}
                            newPostText={props.postPage.newPostText}
                            updateNewPostText={props.updateNewPostText}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

