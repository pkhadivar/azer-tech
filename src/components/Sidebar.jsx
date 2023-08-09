import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Person1 from "../img/person1.png";
import Person2 from "../img/person2.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Link to="/behzad">
        <Chats pic={Person1} name="Behzad" />
      </Link>
      <Link to="/ali">
        <Chats pic={Person2} name="Ali" />
      </Link>
      <Link to="/mehdi">
        <Chats pic={Person1} name="Mehdi" />
      </Link>
    </div>
  );
};

export default SideBar;
