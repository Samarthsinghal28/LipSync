import React,{useState,useEffect} from 'react';
import ReactPlayer from 'react-player';

function PlayAudio(props){
  const handleEnded = () => {
    console.log("ended");
  };
    if(props.checkData){
      return (
          <div>
          <ReactPlayer 
            url="http://127.0.0.1:5000/audio" 
            playing={props.gotAudio}
            onReady={props.setGotAudio(true)}
            height="0px"
            width="0px"
            onEnded={handleEnded}
            
            />
          {console.log(props.gotAudio)}
          </div>
      );
    }
}

export default PlayAudio
