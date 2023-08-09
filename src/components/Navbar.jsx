import React from 'react'
import Pic from "../img/pic.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Azar Tech</span>
      <div className="user">
        <img src={Pic} alt="" />
        <span>Pouria</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
