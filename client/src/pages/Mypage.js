import React from 'react';
import axios from 'axios';
import ItemMypage from '../components/ItemMypage'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './Mypage.css' 

axios.defaults.withCredentials = true;

function Mypage (props) { 
  return (
    <div>
      <Header />
      <div id='itemMypage-container'>
<<<<<<< HEAD
      <Sidebar/>
      <ItemMypage /> 
=======
        <Sidebar/>
        <ItemMypage /> 
>>>>>>> 86d05ea41b94ad9402ef5c0a8fef63326a6c0e49

      {/* {!props.userinfo ?  <div></div>  
      : (
      <center>
        <h1>Mypage</h1>
        <div className='username'>{props.userinfo.username}</div>
        <div className='email'>{props.userinfo.email}</div>
        <div className='mobile'>{props.userinfo.mobile}</div>
        <button className='btn btn-logout' onClick={props.handleLogout}>
          logout
        </button>
      </center>
        )} */}
      </div>
    </div>
  );
}

export default Mypage;