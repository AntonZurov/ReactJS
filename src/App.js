import React from 'react';
import './App.css';
import './index.js';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path="profile" element={<Profile postsData={props.posts} />} />
                        <Route path="dialogs/*" element={<Dialogs dialogsData={props.dialogs} messagesData={props.messages} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}
export default App;