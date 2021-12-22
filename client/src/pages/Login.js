// ToDO: 이것도 마찬가지로 로그인 성공하면 메인화면으로 보내주는것만 해주세요 넵

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true; // 오류 해결했씁니다

export default function Login(props) {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const PostLogin = () => {
    const {email, password} = inputs

    if (!email || !password) return alert("ID 혹은 PW를 확인하세요")

    axios({
      method: 'POST',
      url: `https://localhost:8443/auth/login`,
      headers: {
        accept: 'application/json',
      },
      data: { email, password }
    })
    .then(response => {
      if (!response.data.accessToken) return alert("ID 또는 PW를 확인하세요")
      else {  // 여기 이 코드 맞나요 이렇게 수정하는게 맞나요??
        navigate('/')
      }
      props.setToken(response.data.accessToken)
      props.handleLogin(true)
    })
    .catch(err => {
      window.alert("ID 또는 PW를 확인하세요")
    })
  }

  return (
    <div>
    <Header />
    <div id='loginPageContainer'>
        <div id='loginImg'>
          {/* <img src='/images/blueCat.png' alt='' /> */}
          <img src='/images/logo.png' alt='' />
        </div>
        <h1>로그인</h1>
        <p>
          아직 회원이 아니신가요?<Link to="/signup">회원가입</Link> {/*Signup 주소 변경함*/}
        </p>
        <div id="inputContainer">
          <div>
            <input className="loginInput" type="email" placeholder="이메일" onChange={onChange} name="email" value={email} />
          </div>
          <div>
            <input className="loginInput" type="password" placeholder="비밀번호" onChange={onChange} name="password" value={password}/>
          </div>
        </div>
        <button id="loginButton" onClick={PostLogin}>Login</button>
        <div id="Oauth">Oauth</div>
      </div>
      <Footer />
    </div>
  );
}

{/* <div>
  <center>
    <Header />
    <div>
      <span>이메일</span>
      <input type="email" />
    </div>
    <div>
      <span>비밀번호</span>
      <input type="password" />
    </div>
    <div><Link to='/signup'>회원가입을 하시겠어요?</Link></div>
    <button className="btn btn-login" type="submit">
      로그인
    </button>
    <div className="alert-box"></div>
  </center>
</div>; */}
