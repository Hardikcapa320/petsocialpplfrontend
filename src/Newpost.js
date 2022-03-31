import React from 'react'

export default function Newpost(props) {
  return (
    <div className="contnt_2">
    <div className="div_a">
      <div className="div_title">{props.name}</div>
      <div className="btm_rgt">
        <div className="btm_arc">{props.tag}</div>
      </div>
      <div className="div_top">
        <div className="div_top_lft"><img src={require("./styling/images/img_6.png")} />{props.name}</div>
        <div className="div_top_rgt"><span className="span_date">{Date.now()}</span><span className="span_time">11:15am</span></div>
      </div>
      <div className="div_image"><img src={props.image} alt="pet" /></div>
      <div className="div_btm">
        <div className="btm_list">
          <ul>
            <li><a href="#"><span className="btn_icon"><img src={require("./styling/images/icon_001.png")} alt="share" /></span>Share</a></li>
            <li><a href="#"><span className="btn_icon"><img src={require("./styling/images/icon_002.png")} alt="share" /></span>Flag</a></li>
            <li><a href="#"><span className="btn_icon"><img src={require("./styling/images/icon_004.png")} alt="share" /></span>4 Comments</a></li>
            <li><a ><span className="btn_icon"><img src={require("./styling/images/icon_003.png")} alt="share" /></span>Likes</a></li>
            <div className="like_count"><span className="lft_cnt"></span><span className="mid_cnt"></span><span className="rit_cnt"></span></div>
            <li><a><span className="btn_icon"><img src={require("./styling/images/icon_003.png")} alt="share" /></span>Unlike</a></li>
            <div className="like_count"><span className="lft_cnt"></span><span className="mid_cnt"></span><span className="rit_cnt"></span></div>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}
