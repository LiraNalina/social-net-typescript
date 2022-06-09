import React from 'react';
import './App.css';
/* import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'; */
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Dialogs } from './Components/Dialogs/Dialogs';
import state, { addPost } from './redux/state';
import { Profile } from './Components/Profile/Profile';

const App = () => {

  // let postMessageRef = React.createRef<HTMLDivElement>()

  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs"
            render={() => <Dialogs users={state.dialogsPage.users}
              messages={state.dialogsPage.messages} />} />


          <Route path='/profile'
            render={() => <Profile
              posts={state.postPage.posts}
              addPostCallback={addPost}
            />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

