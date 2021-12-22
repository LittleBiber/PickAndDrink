// TODO: useNavigate로 메인페이지 보내기 구현 못함
// 뭔 에러인지 자꾸 안되서 일단 보류

import React, {useState} from "react"; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    nickname: '',
    password: '', 
    passwordCheck: '',
  });
  const { email, password, passwordCheck, username, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const PostSignup = () => {
    const {email, username, nickname, password, passwordCheck} = inputs
    /*
      가입 시도조차 하지 못하는 조건
      1. 비번/비번확인이 같지 않음. > alert 비번확인하세요
      2. 빈칸이 있음 > 확인 알림

      빈칸 없이 모두 입력되었다면 post localhost:8443/auth/login 보내기
    */
    if (password !== passwordCheck) return alert("비밀번호를 확인하세요")
    if (Object.values(inputs).some((e) => e === '')) return alert("정보를 전부 입력했는지 확인하세요")

    axios({
      method: 'POST',
      url: `https://localhost:8443/auth/signup`,
      headers: {
        accept: 'application/json',
      },
      data: { username, password, nickname, email, }
    })
    .then(result => {
      if (result.status === 201) {
        props.setToken(result.data.accessToken)
        props.handleLogin(true)
        alert('회원가입이 완료되었습니다.')
        navigate('/')
      }
    })
    .catch(err => {
      return alert('오류 발생: 이미 가입하셨는지 확인하세요')
    })
  }

  return (
    <div>
      <Header />
      <div id='signupContainer'>
        <div>
          <input className='email' placeholder='E-mail을 입력해주세요' onChange={onChange} name="email" value={email} />
          {/* <button className='checkButton'>중복확인</button> */}
        </div>
        <div>
          <input className='username' placeholder='이름을 입력해주세요' onChange={onChange} name="username" value={username} />
        </div>

        <div>
          <input className='nickname' placeholder='닉네임을 입력해주세요' onChange={onChange} name="nickname" value={nickname} />
        </div>

        <div>
          <input className='password' placeholder='비밀번호를 입력해주세요' type="password" onChange={onChange} name="password" value={password} />
        </div>

        <div>
          <input className='passwordCheck' placeholder='비밀번호 확인'type="password" onChange={onChange} name="passwordCheck" value={passwordCheck} />
        </div>

        <button id='signupButton' onClick={PostSignup}>회원가입!</button>
      </div>
      <Footer />
    </div>
  )
}

