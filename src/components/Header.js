/** @format */

import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import style from "./Header.module.css";
function Header(props) {
  return (
    <div className='ui fixed menu'>
      <div className='ui container center'>
        <div className={style.container}>
          <h2>Ndangira Shop</h2>
          <div className={style.social}>
            <a href='/'>
              <FaFacebook />
            </a>
            <a href='/'>
              <FaTwitter />
            </a>

            <a href='/'>
              <FaGithub />
            </a>

            <a href='/'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
