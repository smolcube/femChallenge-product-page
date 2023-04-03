import '../dist/style.css';
import React, { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";




export default function Navbar() {
  const [activeClass, setClass] = useState(false);
  const switchClass = () =>{
  setClass(!activeClass);

};

const [shppingCart, setShoppingCart] = useState(false);
const showShoppingCart = () =>{
  setShoppingCart(!shppingCart);

};

  return (
    <>
    <div id="sideMenu" className={activeClass ? 'side-menu' : ''}> 
    {/*<button type='button' >
    <img src="./images/icon-close.svg" alt="" />  
    </button>  
      <ul>
        <li className="item"> <a href='www.google'> Collections</a></li>
        <li className="item"> <a href='www.google'> Men</a></li>
        <li className="item"> <a href='www.google'> Women</a></li>
        <li className="item"> <a href='www.google'> About</a></li>
        <li className="item"> <a href='www.google'> Contact</a></li>
      </ul>*/}
   </div>


    <div className="nav" >
      <div className="nav__left">

    <button type='button' className="nav__left--btn btn" onClick={switchClass}>
      <img className="nav__left--menu" src={menu} alt="menu" />
    </button>  

      <img className="nav__left--logo" src={logo} alt="SNEAKERS logo"  />
      <div className='nav__left--items'>
      <ul>
        <li className="item"> <a href='www.google'> Collections</a></li>
        <li className="item"> <a href='www.google'> Men</a></li>
        <li className="item"> <a href='www.google'> Women</a></li>
        <li className="item"> <a href='www.google'> About</a></li>
        <li className="item"> <a href='www.google'> Contact</a></li>
      </ul>
      </div>
      </div>
      <div className="nav__right">

        <button className="nav__right--btn btn" type='button' onClick={showShoppingCart}>
        <div id="shoppingCart" className={shppingCart ? 'shopping__cart' : '' }>
        </div>

        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" role="img" fill="#69707D" fill-rule="nonzero"/></svg>
        </button>
        <img src={avatar} alt="avatar" className="nav__right--avatar" />
      </div>

    </div>
</>

  );
}
