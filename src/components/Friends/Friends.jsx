import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import style from "./Friends.module.css"






const Friends = (props) => {
   let friendsElement =  props.friends.map((friends) => <FriendsItem  name={friends.name}    />)
   
   let newFriendElement = React.createRef();

   let addFriend = () => {
    let text = newFriendElement.current.value;
    props.addFriend(text);
   }

   return (
    <div className={style.friendList}>
      <div className={style.friendItem}>
        <img className={style.iconPerson} src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" alt="" />
      {friendsElement }
      </div>
      <div>
        <textarea ref={newFriendElement}></textarea>
        <button className={style.button} onClick={addFriend}>add new friend</button>
        </div>
    </div>
 
   )
 }

 
export default Friends;