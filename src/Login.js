import React, {useRef, useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import loginContext from './Context/loginContext'

export default function Login() {
  const {user, setUser, isAuth, setAuth} = useContext(loginContext); 
  const navigate=useNavigate()

  /*useEffect(() => {
   if(localStorage.getItem("users"))
    {
      navigate("/home");
    }
  })*/

  const [usr, userState] = useState({
    email:"",
    password:""
  })

  const handle = e => {
    const {name, value} = e.target

    userState({
      ...usr,
      [name]: value
    })
  }

const login = () => {
  if(usr.email==="" || usr.password==="")
  {
    alert("Please fill in the details")
    return
  }
  axios.post("http://localhost:9002/login", usr, {withCredentials: true})
  .then(res => {
    if(res.data)
    {
      setAuth(true);
      setUser(res.data);
      localStorage.setItem("users", JSON.stringify(res.data));
      navigate("/home");
    }
    else
    {
      alert("User doesn't exist")
    }
  })
}
  return (
    <>
    <div className="container">
    <div className="content">
      <div className="content_rgt">
      <div className="login_sec">
      <h1>Log In</h1>
      <ul>
      <li><span>Email-ID</span><input type="text" name="email" value={usr.email} placeholder="Enter your email" onChange={handle} required/></li>
      <li><span>Password</span><input type="password" name="password" value={usr.password} placeholder="Enter your password" onChange={handle} required/></li>
      <li><input type="submit" value="Log In" onClick={login}/><Link to="/Forgot">Forgot Password</Link></li>
      </ul>
      <div className="addtnal_acnt">I do not have any account yet.<Link to="/">Create My Account Now !</Link></div>
      </div>
      </div>
  
      <div className="content_lft">
      <h1>Welcome from PPL!</h1>
      <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
      <img src={require('./styling/images/img_9.png')}  alt=""/> 
      </div>
  
    </div>
  </div>
  <div className="clear"></div>
  </>
  )
}