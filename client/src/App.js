import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate, BrowserRouter, Link } from 'react-router-dom';
import Event from './pages/Event';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Signup from './pages/Signup';
import Ranking from './pages/Ranking';
import Signin from './pages/Signin';
import Main from './pages/Main'
import axios from 'axios';
import './App.css';



export default function App () {
  const [isLogin, setIsLogin] = useState(false); // 로그인 여부: true/fale로 구분
  const [userinfo, setUserinfo] = useState(null); // 개인정보 저장
  const [accessToken, setAccessToken] = useState(null) // 액세스토큰: null/accToken
  const history = useNavigate(); // Signup, login 페이지 연결 부탁드립니다.

  useEffect(() => {
    if(isLogin) {
      axios({
        method: 'GET',
        url: `https://localhost:8443/auth/me`,
        headers: {
          accept: 'application/json',
          Authorization: accessToken
        }
      })
      .then((res) => {
        setUserinfo(res.data.userData)
      })
    }
  },[isLogin])

  const handleLogin = (value) => {
    setIsLogin(value)
    console.log(value)
  }

  const handleAccessToken = (accToken) => { // 액세스토큰 저장
    setAccessToken(accToken)
    console.log(accToken)
  }

  const isAuthenticated = () => {
    axios
      .get("https://localhost:8443") 
      .then((res) => {
        setIsLogin(true); 
        setUserinfo(res.data.data.userInfo); 
        history.push("/");
      })
      .catch((err) => {
        console.log("토큰이 만료 되었습니다. 다시 로그인 해 주세요.")
      });
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post('https://localhost:3000/signout').then((res) => {
      setUserinfo(null);
      setIsLogin(false);
      history.push('/');
    });
  };

  // useEffect(() => {
  //   isAuthenticated();
  // }, []);

  return (
    <div>

      <Routes>
        <Route path='/login'element={<Login setToken={handleAccessToken} handleLogin={handleLogin}/>} />
        <Route path='/'element={<Main isLogin={isLogin} userinfo={userinfo}/>} />
        <Route path='/mypage'element={<Mypage isLogin={isLogin} userinfo={userinfo} accessToken={accessToken}/>} />
        <Route path='/event'element={<Event isLogin={isLogin} userinfo={userinfo}/>} />
        <Route path='/ranking'element={<Ranking isLogin={isLogin} userinfo={userinfo}/>} />
        <Route path='/signin'element={<Signin isLogin={isLogin} userinfo={userinfo}/>} />
        <Route path='/signup'element={<Signup isLogin={isLogin} setToken={handleAccessToken} handleLogin={handleLogin} userinfo={userinfo}/>} />
      </Routes>

    </div>
  );
}

// react-router-dom v6에서는 ...
// Switch가 Routes로 대체됨
// UseHistory가 useNavigate로 대체됨
// Redirect가 Navigate로 대체됨