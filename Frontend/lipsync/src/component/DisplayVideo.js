import React,{useEffect} from 'react';
import "./DisplayVideo.css"
import { useTimer } from "react-use-precision-timer";

import img1  from './images/avatar1/A_e_i.jpg';
import img2  from './images/avatar1/b_m_p.jpg';
import img3  from './images/avatar1/c_d_n_s_t_x_y_z.jpg';
import img4  from './images/avatar1/ch_j_sh.jpg';
import img5  from './images/avatar1/ee.jpg';
import img6  from './images/avatar1/F_V.jpg';
import img7  from './images/avatar1/g_k.jpg';
import img8  from './images/avatar1/l.jpg';
import img9  from './images/avatar1/o.jpg';
import img10 from './images/avatar1/th.jpg';
import img11 from './images/avatar1/U.jpg';
import img12 from './images/avatar1/w_q.jpg';
import img13 from './images/avatar1/Smile.jpg';

import av1  from './images/avatar2/a.PNG'
import av2  from './images/avatar2/m.PNG'
import av3  from './images/avatar2/s.PNG'
import av4  from './images/avatar2/ch.PNG'
import av5  from './images/avatar2/ee.PNG'
import av6  from './images/avatar2/f.PNG'
import av7  from './images/avatar2/g.PNG'
import av8  from './images/avatar2/I.PNG'
import av9  from './images/avatar2/o.PNG'
import av10 from './images/avatar2/th.PNG'
import av11 from './images/avatar2/U.PNG'
import av12 from './images/avatar2/w.PNG'
import av13 from './images/avatar2/smile.PNG'

function Images(){
    var imgArr={
        1:img1,2:img2,3:img3,4:img4,5:img5,6:img6,7:img7,8:img8,9:img9,10:img10,11:img11,12:img12,13:img13,}
    return imgArr;
}

function ImageAv2(){
  var imgAv2={
    1:av1,2:av2,3:av3,4:av4,5:av5,6:av6,7:av7,8:av8,9:av9,10:av10,11:av11,12:av12,13:av13,}
  return imgAv2;
}

function DisplayVideo(props) {
  var imgArr;

  if (props.character === '1') {
    imgArr = Images();
  } else if (props.character === '-1') {
    imgArr = props.Arr;
  } else {
    imgArr = ImageAv2();
  }

  if(props.gotAudio){

  if (props.inputNeeded) {
    var wordArr = props.apiInput.indexArr;
    var dur_arr = props.apiInput.duration;

    if (props.ind < wordArr.length) {
    

      return (
        <div className="divCenter box">
          <img src={imgArr[wordArr[props.ind]]} width="350" height="450" />
          {console.log(Number(dur_arr[props.ind]))}
          
          {setTimeout(props.setInd,Number(dur_arr[props.ind]))}
          {/* {setTimeout(props.setInd,wordArr[0])} */}
        </div>
      );
    } else {
      return (
        <div className="divCenter box">
          <img src={imgArr[13]} width="350" height="450" />
        </div>
      );
    }
  }
}
}

export default DisplayVideo;