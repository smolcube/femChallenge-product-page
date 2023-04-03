import '../dist/style.css';
import React from 'react'
import cart from "../images/icon-cart-btn.svg";


export default function CartButton() {


  return (
    <>
    <button className='CartButton' type='submit' >
    <img src={cart} alt="" />
        add to cart
    </button>
    </>
  );
}
