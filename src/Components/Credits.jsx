import React from 'react'

const date = new Date();
const year = date.getFullYear;

export default function Credits() {
  return (
    <div className='credits'>
        <p className='credits__text'>
        All copyrights to {year}
        </p>
    </div>
  )
}
