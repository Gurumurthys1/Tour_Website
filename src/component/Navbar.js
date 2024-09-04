import React from 'react'
import {MenuItem} from "./MenuItem"
import "./NavbarStyle.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

   const [clicked, setClicked] = useState(false);
   const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="Narbar-logo">Trippy</h1>

        <div className='menu-icon' onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cname} to={item.url}>
                  <i className={item.icons}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>sign up</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
