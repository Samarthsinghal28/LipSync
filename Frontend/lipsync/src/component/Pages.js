import React,{useState} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import App from "./App.js"
import Home from "./Home.js"
import UploadImages from "./UploadImages.js"
import NewAvatar from "./NewAvatar.js"
function Pages(){
    
    return(
        <Router>
            
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/default" element={<App/>} />
                <Route path="/custom" element={<UploadImages/>}/>
                <Route path="/newAvatar" element={<NewAvatar/>}/>
            </Routes>
        </Router>
    );
}

export default Pages