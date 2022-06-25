import React from 'react';
import style from './Friens.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElements = props.friendsData.map( d => <FriendsItem name={d.name} id={d.id} image={d.imageData}/>);


    return (
        <div className={style.friends}>
            <div className={style.friendsItems}>
                {friendsElements}
            </div>

        </div>
    )
}
export default Friends;