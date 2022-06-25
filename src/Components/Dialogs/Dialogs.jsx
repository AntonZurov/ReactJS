import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} image={d.imageData}/>);

    let messagesElements= props.messagesData.map( m => <Message message={m.message} image={m.imageData}/>);

    let newMessageElement =React.createRef();
    let addMessage=() =>{
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                 {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick ={addMessage}> Add message</button>
                    <button> Del message</button>
                </div>

            </div>




        </div>
    )
}
export default Dialogs;