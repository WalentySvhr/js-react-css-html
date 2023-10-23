import React from "react"
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import { addFriend } from "../../redux/state";



const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElement = props.messages.map((message) => <Message message={message.message} />)

  

     return (
        <div className={styles.mainContainer}>
            <div className={styles.dialogs}>
                <textarea></textarea>
                <button>add</button>
                {dialogsElements} 
            </div>
            <div className={styles.message}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;