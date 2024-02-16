import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleBar from './TitleBar.js'
import Footer from './Footer.js'

import "./Home.css";

function Home() {
  const [selectedOption, changeOption] = useState(-1);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    changeOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === 1) {
      navigate('/default');
    } else if (selectedOption === 2) {
      navigate('/custom');
    }
  };

  return (
    
    <div className="flexCol">
    <TitleBar/>
    <div className="centerBox">
      <h1>Choose one option:</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <input
          type="radio"
          name="avatarOption"
          onChange={() => handleOptionChange(1)}
          checked={selectedOption === 1}
        />
        <label htmlFor="default">Use Default Avatar</label>
        <br/>
        <input
          type="radio"
          name="avatarOption"
          onChange={() => handleOptionChange(2)}
          checked={selectedOption === 2}
        />
        <label htmlFor="custom">Use Custom Avatar</label>
        </div>
        <input type="submit" name="select" />
      </form>
    </div>
    
    
    <Footer/>
    </div>
    
  );
}

export default Home;
