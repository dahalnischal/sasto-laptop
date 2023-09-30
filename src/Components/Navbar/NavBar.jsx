import React from "react";

import './NavBar.scss';

//importing icons
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="text-div">
        <ul>
          <li>
            <a href="">Category</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="icon-div">
        <AiOutlineShoppingCart className="icon"/>
        <IoIosNotifications className="icon"/>
        <MdOutlineAccountCircle className="icon"/>
      </div>
      <div className="icon-div"></div>
    </div>
  );
};

export default NavBar;
