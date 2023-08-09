import React from 'react'
import Message from './Message'
import Pic from "../img/pic.jpg"
import Person1 from "../img/person1.png"
import Person2 from "../img/person2.png"


const Messages1 = () => {
  return (
    <div className="messages">
      <Message className="message" message="Hello" pic={Pic}/>
      <Message className="message owner" message="Hello Pouria, send me your picture" pic={Person2} />
      <Message className="message" message="Ok" pic={Pic} prof={Pic}/>
      <Message className="message owner" message="Thank you" pic={Person2} />
    </div>
  )
}

export default Messages1
