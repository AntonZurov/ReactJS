import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import {addPost, updateNewPostText, subscribe} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';
import stateData from './redux/state';
/*import reportWebVitals from "./reportWebVitals";*/

let rerenderEntireTree=() =>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={stateData}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}
                    />
                </BrowserRouter>
            </React.StrictMode>

    );
rerenderEntireTree(stateData);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
    reportWebVitals(console.log);*/
