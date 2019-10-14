import React, { Component } from "react";

function Chats(props) {
    let htmlArr = [];
    for(let [date, user, message] of props.data) {
        htmlArr.push(<div><span className="date">{date}</span> - <span className="user">{user}</span> - <span className="message">{message}</span></div>);
    }

    return (
        <div>
            {htmlArr}
        </div>
    )

}

export default Chats;