import React from "react";

export default function Item({item}) {
  return (
    <div className='event' key={item.id}>
    <div className='eventImg'>
      <img src={item.img} alt='' />
    </div>
    <div className='eventInfo'>
      <div className='eventCategory'>{item.category}<div className='star'>⭐</div></div>
      <div>{item.name} <br /> {item.price}원</div>
    </div>
  </div>
  )
}