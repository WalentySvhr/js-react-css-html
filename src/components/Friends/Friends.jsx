import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";




const Friends = (props) => {
   let friendsElement =  props.friends.map((friends) => <FriendsItem  name={friends.name}    />)
   
   let newFriendElement = React.createRef();

   let addFriend = () => {
    let text = newFriendElement.current.value;
    props.addFriend(text);
   }

   return (
    <div>
        {friendsElement}
        <textarea ref={newFriendElement}></textarea>
        <button onClick={addFriend}>add new friend</button>
    </div>
   )
 }

export default Friends;