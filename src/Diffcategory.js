import React from 'react';
import { Link } from 'react-router-dom';

export default function Diffcategory() {
  return (
    <div className="rght_cate">
    <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
    <div className="rght_list">
    <ul>
        <li><Link to="/category/cat"><span className="list_icon"><img src={require("./styling/images/icon_01.png")} alt="up" /></span> CATS</Link></li>
        <li><Link to="/category/dog"><span className="list_icon"><img src={require("./styling/images/icon_02.png")} alt="up" /></span> Dogs</Link></li>
        <li><Link to="/category/bird"><span className="list_icon"><img src={require("./styling/images/icon_03.png")} alt="up" /></span> Birds</Link></li>
        <li><Link to="/category/rabbit"><span className="list_icon"><img src={require("./styling/images/icon_04.png")} alt="up" /></span> Rabbit</Link></li>
        <li><Link to="/home"><span className="list_icon"><img src={require("./styling/images/icon_05.png")} alt="up" /></span> Others</Link></li>
      </ul>
    </div>
  </div>
  )
}
