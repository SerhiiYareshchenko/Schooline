import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Photos from './components/Photos/Photos';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';

const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper-content'>
                <Route path='/profile/:userId?' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/photos' render={() => <Photos/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;