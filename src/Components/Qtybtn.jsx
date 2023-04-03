import '../dist/style.css';
import React ,  { useState } from 'react'

export default function Qtybtn() {
  const [counter , setCounter] = useState(0);
    const increment = () => {
      setCounter(counter + 1);
    }

    const decrement = () => {
      setCounter(counter - 1);
    }

  return (
    <div className='qty-container'>

      <button className='qty-container__btn plus' onClick={increment} type='button'>+</button>
      <input className='qty-container__input' type="text" name="qty" id="qty" placeholder='0' value={counter}/>
      <button className='qty-container__btn minus' onClick={decrement} disabled={counter === 0} type='button'>-</button>

    </div>
  )
}
