import React from "react";

const Event = (props) =>{
    return(
        <div className = "card">
            <img src = {props.image} height="50%" width ="100%"/>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <div className="button">
            <a href= {props.website} target="_blank">
  <button>See More</button> </a>
  </div>
        </div>

    )
}

export default Event;