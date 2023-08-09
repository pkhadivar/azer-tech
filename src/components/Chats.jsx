import React from "react";
import Pic from "../img/pic.jpg"

const Chats = ({pic, name}) => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={pic} alt="" />
        <div className="userChatInfo">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
