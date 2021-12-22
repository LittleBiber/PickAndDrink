import React from 'react';
import axios from 'axios';
import ItemMypage from '../components/MyPageComponent/ItemMypage'
import Header from '../components/Header'
import Sidebar from '../components/RankingPageComponent/Sidebar'
import './Mypage.css' 
import ItemPageBottom from '../components/MyPageComponent/ItemMypageBottom'

axios.defaults.withCredentials = true;

function Mypage ({isLogin, userinfo, accessToken}) { 
  return (
    <div>
      <Header isLogin={isLogin} userinfo={userinfo}/>
      <div id='itemMypage-container'>
      <Sidebar/>
      <ItemMypage userinfo={userinfo} accessToken={accessToken}/> 
      </div>
    </div>
  );
}

export default Mypage;