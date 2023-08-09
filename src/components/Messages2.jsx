import React from 'react'
import Message from './Message'
import Pic from "../img/pic.jpg"
import Person1 from "../img/person1.png"


const Messages2 = () => {
  return (
    <div className="messages">
      <Message className="message" message="Please explain to me about next project dear Mehdi" pic={Pic}/>
      <Message className="message owner" message="Hello Pouria, I am bussy, Let me explain later" pic={Person1} />
      <Message className="message" message="Ok, Sure" pic={Pic}/>
      <Message className="message owner" message="It is kinf of you" pic={Person1} />
    </div>
  )
}

export default Messages2