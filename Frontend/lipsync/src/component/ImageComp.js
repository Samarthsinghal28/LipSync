import React, { useState } from 'react';
import "./UploadImages.css"


function ImageComp(props){
    
    return <div className="centeredText">
    <div width="300px" height="300px">
    <img src={props.imgupl} width="300px" height="300px" alt="Selected" />
    </div>
    <div width="300px" height="300px">
    <div width="300px" className="center">
    <input type="file" id="myfile" accept="image/*" name="myfile" required onChange={(event) => props.imgchange(URL.createObjectURL(event.target.files[0])) } />
    </div>
    <label For="myfile"><p align="center">Viseme {props.viseme}</p></label>
    </div>
    </div>
}

export default ImageComp