import React from "react";

export default function RankItem({item, curCategory}) {
  return (
    <div>
      {
      curCategory === '전체' ?
        <article key={item.id} className="ranking-items">
          <div className='goldMedal'></div>
          <div className="ranking-item-img"><img src={item.img} alt="" /></div>
          <div className="itemInfo item-name">{item.name}</div>
          <div className='itemInfo item-store'>{item.store_name}</div>
          <div className='itemInfo item-price'>{item.price}</div>
          <div className='itemInfo like-count'>{item.ranking_count}</div>
          <div className='itemInfo event-info'>{item.event_info}</div>
          <div className='itemInfo favorites-item'>⭐</div>
        </article>
      : 
        <article key={item.id} className="ranking-items">
          <div className='ranking-number'></div>
          <div className="ranking-item-img"><img src={item.img} alt="" /></div>
          <div className="itemInfo item-name">{item.name}</div>
          <div className='itemInfo item-store'>{item.store_name}</div>
          <div className='itemInfo item-price'>{item.price}</div>
          <div className='itemInfo like-count'>{item.ranking_count}</div>
          <div className='itemInfo event-info'>{item.event_info}</div>
          <div className='favorites-item'>⭐</div>
        </article>
      }
    </div>
  )
}

// 현재 카테고리 상태가 전체라면 메달을 모두 금메달로