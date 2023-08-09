import React from 'react'
//import Pic from "../img/pic.jpg"

const Message = ({className, message, pic, prof}) => {
  return (
    <div className={className}>
      <div className="messageInfo">
        <img src={pic} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message}</p>
        <img src={prof} alt="" />
      </div>
    </div>
  )
}

export default Message
