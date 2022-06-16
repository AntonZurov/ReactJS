import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from './Dialogs.module.css';

const Dialogs = (dialogsData, messagesData) => {
/*    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]*/
    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);

/*    let messages = [
        {id: 1, message: 'h1'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
    ]*/
    let messagesElements= messagesData.map( m => <Message message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                 {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;