import React from 'react';
import './input.css';

import img1 from './images/Select/Smile.jpg'
import img2 from './images/Select/Smile1.PNG'

function Input(props) {
    if (props.inputNeeded) {
      return (
        <div className="centered_div form_box" >
          
          <form onSubmit={props.onSubmit}>
            <div className="space">
            <div>
            <input type="radio" id="avatar1" name="avatar" value="1" onClick={(event)=>props.changeCharacter(event.target.value)}/>
            <label for="avatar1"><img src={img1} width="200px" height="400px"/> </label>
            </div>
            <div>
            <input type="radio" id="avatar2" name="avatar" value="2" onClick={(event)=>props.changeCharacter(event.target.value)}/>
            <label for="avatar2"><img src={img2} width="200px" height="400px"/> </label>
            </div>
            </div>

            <br/>
            <label htmlFor="sentence">Enter sentence: <br/></label>
            <input type="text" id="sentence" name="sentence" value={props.inputValue} onChange={(event)=>props.setInputValue(event.target.value)} /><br /><br />
            <input type="submit" value="Submit" />
          </form>
          
        </div>

      );
    }
  
    return null;
  
  }

export default Input