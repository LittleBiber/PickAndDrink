import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar () {

  return (
    <div id='mypage-sidebar-body'>
    <section id="sidebar-container">
      <div className='sidebar-category'>comment</div>
      <div className='sidebar-category'>즐겨찾기</div>
      <div className='sidebar-category'>회원탈퇴</div>
    </section>
</div>
  );
}

export default Sidebar;
