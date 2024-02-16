import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import TitleBar from './TitleBar.js';
import "./input.css"
import DisplayVideo from "./DisplayVideo.js"
import PlayAudio from "./PlayAudio.js"
import LoadingBar from 'react-top-loading-bar'
import Footer from "./Footer.js"

function CustomInput(props) {
  if ((props.customInputNeeded)) {
    return (
      <div className="centered_div form_box">
        
        <img src={props.avatarImage} alt="Avatar" height="400px" width="300px" />
        <form onSubmit={props.onSubmit}>
          <label htmlFor="sentence">Enter sentence: <br /></label>
          <input
            type="text"
            id="sentence"
            name="sentence"
            value={props.inputValue}
            onChange={(event) => props.setInputValue(event.target.value)}
          />
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function NewAvatar() {
  const location = useLocation();
  const data = location.state.arr;
  var [inputNeed, setInputNeeded] = useState(true);
  var [userInput, setUserInput] = useState("");
  var [ApiData,SetApiData]=useState(null);
  var [needApiData,updateNeed]=useState(false);
  var [j,updateJ]=useState(1);
  const ref = useRef(null);

  function incrementJ(){
    updateJ(j+1);
  }
  useEffect(() => {
    // GET request
    axios.get(`http://127.0.0.1:5000/${userInput}`)
    .then(response => {
        console.log(response.data);
        SetApiData(response.data);
        updateNeed(true);
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  }, [inputNeed]);

  return (
    <div>
      <LoadingBar color='#f11946' ref={ref} />
      <TitleBar />
      <CustomInput
        customInputNeeded={inputNeed}
        avatarImage={data[13]}
        onSubmit={() => setInputNeeded(false)}
        inputValue={userInput}
        setInputValue={setUserInput}
      />

      <DisplayVideo ind={j} setInd={incrementJ} inputNeeded={needApiData} apiInput={ApiData} character={'-1'} Arr={data}/>
      <PlayAudio checkData={needApiData}/>
      <Footer/>
    </div>
  );
}

export default NewAvatar;
