import React, { useState } from 'react'
import '../dist/style.css';
import next from "../images/icon-next.svg";
import prev from "../images/icon-previous.svg";
import CartButton from "./CartButton";
import Qtybtn from "./Qtybtn";
import data from "../Images";





export default function Product() {
    var price = Math.floor(Math.random()*500);
    
    const [productImg] = useState(data);
    const [value , setValue] = useState(0);
    const {image} = productImg[value]
    const {alt} = productImg[value]

    const [scrollIndex , setScroll] = useState(1);
    
  const nextSlide = () => {
    if (scrollIndex !== productImg.length) {
        setScroll(scrollIndex + 1);
    } else if (scrollIndex === productImg.length) {
        setScroll(1);
    }
  };

  const previousSlide = () => {
    if (scrollIndex !== 1) {
        setScroll(scrollIndex - 1);
    } else if (scrollIndex === 1) {
        setScroll(productImg.length);
    }
  };

  return (
      <div className='container'>
      
        <section className='container__pictures'>
            <div className='container__pictures--selected'>
            <img src={image} alt={alt} />
    
                <button type='button' className='direc prev'>
                    <img src={prev} alt="prev" onClick={previousSlide}/>
                </button>
                <button type='button' className='direc next'>
                    <img src={next} alt="next" onClick={nextSlide}/>
                </button>
            </div>

            <ul className='container__pictures--opt' >
            {productImg.map((item, index) => (
                   <li key={item.id} onClick={() => setValue(index)}>
                    <img className='container__pictures--img' src={item.thumbnainl} alt="" />
                   </li> 
                )
                )}
            </ul>
        </section>
        
        
    <div className='container__content'>
        <div className="container__content--text">

        <span className='container__content--company'>Sneaker Company</span>
        <h1 className='container__content--title'>Fall Limited Edition Sneakers</h1>
        <p className='container__content--description'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        
        <h2 className="container__content--price"> 
        {"$" + price.toFixed(2)}
        </h2>

        <span className="container__content--dicount ">
            {"$" + Math.floor((price/50) *100).toFixed(2)}
        </span>

        </div>
        <div className="container__content--btn">
        <Qtybtn/>
        <CartButton/>
        </div>
    </div>
    </div>
    
  );
}
