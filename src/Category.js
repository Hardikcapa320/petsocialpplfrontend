import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Createpost from './Createpost'
import Newpost from './Newpost'
import ReactPaginate from 'react-paginate'
import loginContext from './Context/loginContext'
import Diffcategory from './Diffcategory'
export default function Category() {

    const {id} = useParams();

    const {user, isAuth} = useContext(loginContext);
    const [countLikes, setLikes] = useState(0);

    const Increment = () => {
      setLikes(countLikes+1);
    }
  
    const [countDeslikes, setDislikes] = useState(0);
  
    const Decrement = () => {
      setDislikes(countDeslikes+1);
    }
  
    const [posts, setPosts] = useState([]);
    const [pgNumber, setPgNumber] = useState(0);
  
    const postsPerPage = 2;
    const postsVisited = pgNumber * postsPerPage;
  
    const displayPosts = posts.slice(postsVisited, postsVisited + postsPerPage).map(post => {
      return(
        <Newpost key={post.title} name= {post.title} image= {post.imgID} tag= {post.category} />
      )
    }
  );
  
  
    const getPosts = () => {
      axios.get(`http://localhost:9002/category/${id}`)
      .then((res)=> {
        console.log(res.data);
        setPosts(res.data);
      })
    }
    useEffect(getPosts,[]);
  
    const pageCount = Math.ceil(posts.length/postsPerPage);
    const pageChange = ({selected}) => {
      setPgNumber(selected);
    };

  return (
    <div className="container">
    <div className="content">
      <div className="content_rgt">
        <div className="rght_btn"> <span className="rght_btn_icon"><img src={require("./styling/images/btn_iconb.png")} alt="up" /></span> <span className="btn_sep"><img src={require("./styling/images/btn_sep.png")} alt="sep" /></span> <Link to="/post">Upload Post</Link> </div>
        <div className="rght_btn"> <span className="rght_btn_icon"><img src={require("./styling/images/btn_icona.png")} alt="up" /></span> <span className="btn_sep"><img src={require("./styling/images/btn_sep.png")} alt="sep" /></span> <a href="newpst">Invite Friends</a> </div>
        <div className="rght_cate">
            <Diffcategory/>
        </div>
        <div className="rght_cate">
          <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
          <div className="sub_dwn">
            <div className="feat_sec">
              <div className="feat_sec_img"><img src={require("./styling/images/feat_img1.png")} alt="image" /></div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Cats</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img"><img src={require("./styling/images/feat_img2.png")} alt="image" /></div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Dogs</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img"><img src={require("./styling/images/feat_img3.png")} alt="image" /></div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Rabbits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_lft">
        <div className="contnt_1">
          <div className="list_1">
          </div>
          <div className="post_div">
            <div className="post_list">
              <ul>
                <li><a href="#"><span className="list_img"><img src={require("./styling/images/img_1.png")} /></span>Latest First</a></li>
                <li><a href="#"><span className="list_img"><img src={require("./styling/images/img_2.png")} /></span>Oldest First</a></li>
                <li><a href="#"><span className="list_img"><img src={require("./styling/images/img_3.png")} /></span>Most Pet</a></li>
                <li><a href="#"><span className="list_img"><img src={require("./styling/images/img_4.png")} /></span>Most Clicks</a></li>
                <li><a href="#"><span className="list_img"><img src={require("./styling/images/img_5.png")} /></span>Most Commented</a></li>
              </ul>
            </div>
            <div className="post_txt">4 New Post Updates</div>
          </div>
        </div>
        <div className="contnt_2">
          {displayPosts}
          <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
    <div className="clear"></div>
  </div>      
  )
}
