import React,{useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("users"))
        {
            navigate("/home");
        }
    })
    
    const [user, setUser] = useState({
        username:"",
        password:"",
        email:"",
        fname:"",
        lname:""
    })

    const handle = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () =>{
        if(user.username && user.password && user.email && user.fname && user.lname)
        {
            axios.post("http://localhost:9002/register", user, {withCredentials: true})
            .then( res => {
                alert(res.data.message)
                navigate("/login")
        })
        }
        else
        {
            alert("Please fill in the details");
        }
    }
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="content_rgt">
                        <div className="register_sec">
                            <h1>Create An Account</h1>
                            <ul>
                                <li><span>Username</span><input type="text" name="username" value={user.username} placeholder="Enter your username" onChange={handle}/></li>
                                <li><span>Password</span><input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handle}/></li>
                                <li><span>Email</span><input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handle}/></li>
                                <li><span>First Name</span><input type="text" name="fname" value={user.fname} placeholder="Enter your first name" onChange={handle}/></li>
                                <li><span>Last Name</span><input type="text" name="lname" value={user.lname} placeholder="Enter your last name" onChange={handle}/></li>
                                <li><input type="submit" value="Register" onClick={register}/></li>
                            </ul>
                            <div className="addtnal_acnt">I already have an account.<Link to="/login">Login My Account !</Link></div>
                        </div>

                    </div>
                    <div className="content_lft">
                        <h1>Welcome from PPL!</h1>
                        <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        <img src={require('./styling/images/img_9.png')} alt="" /> </div>
                </div>
            </div>
            <div className="clear"></div>
  </>
  )
}