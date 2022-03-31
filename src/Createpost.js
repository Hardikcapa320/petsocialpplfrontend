import React, {useState, useContext} from 'react'
import loginContext from './Context/loginContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Diffcategory from './Diffcategory';

export default function Createpost() {

    const navigate = useNavigate();
    const formData = new FormData();
    let file;
    const {user, isAuth} = useContext(loginContext);
    const [imgFile, setImgfile] = useState();
    const [postdata, getPost] = useState({
        title:"",
        category:""
    })

    const handle = e => {
        const {name, value} = e.target
        getPost({
            ...postdata,
            [name]: value
        })
    }

    const fileChange = e => {
        file = e.target.files[0];
        setImgfile(e.target.files[0]);
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);
    }

    const submit = () => {
        if(!postdata.title || !imgFile)
        {
            alert({message:"Please fill in the details to post image"});
            return;
        }
        formData.append("title", postdata.title);
        formData.append("image", imgFile);
        formData.append("userID", user._id)
        formData.append("category", postdata.category);
        formData.append("email",user.email);
        axios.post("http://localhost:9002/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            alert(res.data.message);
            navigate("/home");
        }) 
    }
    return (
        <div className="container">
            <div className="content">
                <div className="content_rgt">
                    <div className="rght_btn"> <span className="rght_btn_icon"><img src={require("./styling/images/btn_iconb.png")} alt="up" /></span> <span className="btn_sep"><img src={require("./styling/images/btn_sep.png")} alt="sep" /></span> <a href="/upload">Upload Post</a> </div>
                    <div className="rght_btn"> <span className="rght_btn_icon"><img src={require("./styling/images/btn_icona.png")} alt="up" /></span> <span className="btn_sep"><img src={require("./styling/images/btn_sep.png")} alt="sep" /></span> <a href="#">Invite Friends</a> </div>
                    <div className="rght_cate">
                        <Diffcategory/>
                    </div>
                    <div className="rght_cate">
                        <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                        <div className="sub_dwn">
                            <div className="feat_sec">
                                <div className="feat_sec_img"><img src={require("./styling/images/feat_img1.png")} alt="image" /></div>
                                <div className="feat_txt">Lorem Ipusum Text</div>

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
                    <div className="contnt_3">
                        <ul>
                            <li>
                                    <div className="cmnt_div">
                                        <h2>Title</h2>
                                        <input type="text" name="title" value={postdata.title} className="cmnt_bx" onChange={handle}/>
                                    </div>
                                        </li>
                                        <li>
                                            <div className="cmnt_div1">
                                                <h2>Select Image</h2>
                                                <input type="file" className="cmnt_bx1" onChange={fileChange}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cmnt_div1">
                                                <h2>Category</h2>
                                                <input type="text" name="category" value={postdata.category} className="cmnt_bx1" onChange={handle}/>
                                            </div>
                                        </li>
                        </ul>
                                         <div className="view_div"><a onClick={submit}>Post</a></div>

                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                    </div>
                    )
}