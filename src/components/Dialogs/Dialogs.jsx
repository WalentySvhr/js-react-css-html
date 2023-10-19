import React from "react"
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";





const Dialogs = (props) => {

    let dialogs = [
        { id: 1, neme: 'Walenty' },
        { id: 2, neme: 'Andrye' },
        { id: 3, neme: 'Sasha' },
        { id: 4, neme: 'Wiktor' },
    ]

    let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.neme} id={dialog.id} />)

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'It for u' },
        { id: 3, message: 'Nice' },

    ]

    let messagesElement = messages.map((message) => <Message message={message.message} />)

    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.message}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;