import React from 'react';
import style from './FriendsItem.module.css';
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;
    return (


        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path} className = {dialogData => dialogData.isActive ? style.active: style.nonactive}> {props.name}</NavLink>
            <div className={`${style.nonactive} ${style.active}`}>
                <img src={props.image} className = {dialogData => dialogData.isActive ? style.active : style.nonactive}/>
            </div>
        </div>
    )
}

export default FriendsItem;