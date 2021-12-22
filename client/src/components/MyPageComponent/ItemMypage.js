import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ItemMypage.css'
// import { items } from '../assets/dummyData'
import Items from '../MainPageComponent/Items'
import ItemMypageBottom from './ItemMypageBottom';
import axios from 'axios';

function ItemMypage ({userinfo, accessToken}) {

  useEffect(() => {
    axios.get('https://localhost:8443/like',{
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    })
    .then((res) => {
      console.log(res)
    })
  }, [])


  return (
    <div id='item-mypage-body'>
        <section id="mypage-Container"> 
          <article className="profile"> 
            <div className="profile-Img">
              <img src="images/blueCat.png" alt="" />
            </div> 
              {
                userinfo ? <div className='welcome'>{`${userinfo.nickname}님 반갑습니다.`}</div>
                : ''
              }
          </article>
          <div className='userLike'>
            <article className='user-like'>{`${userinfo.nickname}님의 좋아요 목록`}</article>
          </div>
          <ItemMypageBottom />
        </section>
        
        {/* <div> 
          <article className="itemList">
            {items.map((item) => <Items key={item.id} item={item} />)}
          </article>
        </div>
          {/* </article> */}
          
        
      </div>
  
  );
}

export default ItemMypage;