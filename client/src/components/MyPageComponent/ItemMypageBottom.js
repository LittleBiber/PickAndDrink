import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMypageBottom.css'
import { items } from '../../assets/dummyData'
import Items from '../MainPageComponent/Item'


function ItemMypageBottom () {

  return (
        
        <div> 
          <article className="itemList">
            {items.map((item) => <Items key={item.id} item={item} />)}
          </article>
        </div>

  );
}

export default ItemMypageBottom;