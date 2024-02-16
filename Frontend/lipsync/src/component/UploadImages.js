import React, { useState } from 'react';
import img from "./images/upload.jpg";
import TitleBar from './TitleBar.js'
import Footer from './Footer.js'
import ImageComp from "./ImageComp.js";
import { useNavigate } from "react-router-dom";

import "./UploadImages.css";

function ImageUpload(){

    var imgArr=[];
    var changeImg=[];
    var navigate=useNavigate();

    
    [[imgArr[1],changeImg[1]],[imgArr[2],changeImg[2]],[imgArr[3],changeImg[3]],[imgArr[4],changeImg[4]],[imgArr[5],changeImg[5]],
    [imgArr[6],changeImg[6]],[imgArr[7],changeImg[7]],[imgArr[8],changeImg[8]],[imgArr[9],changeImg[9]],[imgArr[10],changeImg[10]],
    [imgArr[11],changeImg[11]],[imgArr[12],changeImg[12]],[imgArr[13],changeImg[13]]]   =  [useState(img),useState(img),useState(img),
    useState(img),useState(img),useState(img),useState(img),useState(img),useState(img),useState(img),useState(img),useState(img),
    useState(img)]

    var data={arr:imgArr}

    function handleSubmit(){
      navigate('/newAvatar',{state:data})
    }
    const buttonStyle = {
      width: '50px',
      height: '20px',
    };

  return (
    <div className="centeredText">
      <TitleBar/>
      
      <form onSubmit={handleSubmit}>
      <div className="horizontalFlex">
        <ImageComp imgupl={imgArr[1]}  imgchange={changeImg[1]}  viseme={"A"}/>
        <ImageComp imgupl={imgArr[2]}  imgchange={changeImg[2]}  viseme={"B"}/>
        <ImageComp imgupl={imgArr[3]}  imgchange={changeImg[3]}  viseme={"C"}/>
        <ImageComp imgupl={imgArr[4]}  imgchange={changeImg[4]}  viseme={"CH"}/>
        <ImageComp imgupl={imgArr[5]}  imgchange={changeImg[5]}  viseme={"EE"}/>
        <ImageComp imgupl={imgArr[6]}  imgchange={changeImg[6]}  viseme={"F"}/>
        <ImageComp imgupl={imgArr[7]}  imgchange={changeImg[7]}  viseme={"G"}/>
        <ImageComp imgupl={imgArr[8]}  imgchange={changeImg[8]}  viseme={"L"}/>
        <ImageComp imgupl={imgArr[9]}  imgchange={changeImg[9]}  viseme={"O"}/>
        <ImageComp imgupl={imgArr[10]} imgchange={changeImg[10]} viseme={"TH"}/>
        <ImageComp imgupl={imgArr[11]} imgchange={changeImg[11]} viseme={"U"}/>
        <ImageComp imgupl={imgArr[12]} imgchange={changeImg[12]} viseme={"W"}/>
        <ImageComp imgupl={imgArr[13]} imgchange={changeImg[13]} viseme={"Normal"}/>
      </div>
      <div className="horizontalFlex">
      <input type="submit" style={buttonStyle} />
      
      </div>
      </form>
      <h3>**Upload Image according to the given Viseme **</h3>
      <h3>**Upload Image according to the given Viseme **</h3>
      <Footer/>
    </div>
  );
}


function UploadImages(){

    return <div>
        <ImageUpload/>
    </div>
}


export default ImageUpload