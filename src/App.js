import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Forgot from './Forgot';
import Home from './Home'
import Createpost from './Createpost';
import Newpost from './Newpost';
import { useEffect, useContext } from 'react';
import loginContext from './Context/loginContext';
import Auth from './Context/Auth';
import Timeline from './Timeline';
import Category from './Category';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const {user, setUser, isAuth, setAuth} = useContext(loginContext)

  return (
    <Auth>
      <Router>
        <Navbar />  
          <Routes>
            <Route exact path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/forgot" element={<Forgot/>}/>
            <Route path="/newpst" element={<Newpost/>}/>
            <Route path="/timeline" element={<Timeline/>}/>
            <Route path="/post" element={<Createpost/>}/>
            <Route path="/category/:id" element={<Category/>}/>
              {user && user._id ? <Route  path="/home" element={<Home/>}/> : <Route path="/login" element={<Login/>}/>}
          </Routes>
          
        <Footer />
      </Router>
    </Auth>
  );
}

export default App;
