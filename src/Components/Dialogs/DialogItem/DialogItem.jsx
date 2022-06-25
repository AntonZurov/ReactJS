import React from 'react';
import style from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (


        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path} className = {dialogData => dialogData.isActive ? style.active: style.nonactive}> {props.name}</NavLink>
            <div className={`${style.nonactive} ${style.active}`}>
                <img src={props.image} className = {dialogData => dialogData.isActive ? style.active : style.nonactive}/>
            </div>
        </div>
    )
}

export default DialogItem;