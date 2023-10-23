import React from "react"
import { NavLink } from "react-router-dom";



const FriendsItem = (props) => {
    let path = '/friend' + props.id;
    return (
        <div >
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default FriendsItem;