import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginContext from './Context/loginContext';

export default function Navbar() {
  const navigate = useNavigate();
  const {user, setUser, isAuth, setAuth} = useContext(loginContext)
  let logout ="";
  let login ="Login";
  if(isAuth)
  {
    logout = "Logout";
    login = "Login"
  }
  const logouts = () => {
    setUser(undefined);
    setAuth(undefined);
    localStorage.removeItem("users");
    logout="";
    navigate("/login")
  }
    return (
        <>
        <div className="header">
        <div className="header_lft">
          <div className="logo"><a href="#"><img src={require('./styling/images/logo.png')}/></a></div>
          <div className="navigatn">
            <ul>
              {
                localStorage.getItem("users") ?
                <>
                <li><Link to={isAuth?"/home":"/login"}>Home</Link></li>
                <li><Link to={"/timeline"}>Timeline</Link></li>
                <li><a href="#" onClick={logouts}>{logout}</a></li>
                </>
                :
                <>
                <li><Link to={"/"}>Register</Link></li>
                <li><Link to={"/login"}>{login}</Link></li>
                </>
              }
            </ul>
          </div>
        </div>
        <div className="header_rgt">
          <div className="flag_div"><img src={require('./styling/images/flag.png')}/></div>
          <input type="text" placeholder="Search" className="txt_box"/>
          <div className="msg_box"><a href="#"><span className="msg_count">100</span></a></div>
          <div className="info_div">
            <div className="image_div"> <img src={require('./styling/images/pic.png')}/> </div>
            <div className="info_div1">{user && user.fname}</div>
          </div>
        </div>
      </div>
      </>
    )
}