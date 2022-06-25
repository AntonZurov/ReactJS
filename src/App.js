import React from 'react';
import './App.css';
import './index.js';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile" element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                        <Route path="dialogs/*" element={<Dialogs
                            dialogsData={props.state.dialogsPage.dialogsData}
                            messagesData={props.state.dialogsPage.messagesData}/> }/>
                        <Route path="friends/*" element={<Friends
                            friendsData={props.state.friendsData} />} />
                     </Routes>
                </div>

            </div>
        )
}

export default App;