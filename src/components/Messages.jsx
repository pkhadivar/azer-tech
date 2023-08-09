import React from 'react'
import Message from './Message'
import Pic from "../img/pic.jpg"
import Person1 from "../img/person1.png"


const Messages = () => {
  return (
    <div className="messages">
      <Message className="message" message="Hello" pic={Pic}/>
      <Message className="message owner" message="Hello" pic={Person1} />
      <Message className="message" message="How are you behzad?" pic={Pic}/>
      <Message className="message owner" message="Thanks pouria" pic={Person1} />
    </div>
  )
}

export default Messages
