import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar.js'
import Input from './Input.js'
import DisplayVideo from './DisplayVideo.js'
import Footer from './Footer.js'
import PlayAudio from './PlayAudio.js'
import UploadImages from './UploadImages.js'
import './App.css'


function App(){
  var [i,seti]=useState(0);
  var [gotInput,setgotInput]=useState(true);
  var [userInput,setuserInput]=useState("");
  var [apiData,setApiData]=useState(null);
  var [gotApiData, setGotApiData] = useState(false);
  var [selectedAvatar,setAvatar] = useState(0);
  var [isLoaded, setIsLoaded] = useState(false);
  // var [gotAudio,setGotAudio] = useState(0);

  function incrementI(){seti(i+1);}
  function setGotInput(){setgotInput(false);}
  function setInput(sentence){setuserInput(sentence);}
  function setApi(){setGotApiData(true);}
  function avatarSelect(x){
    console.log(x);
    setAvatar(x);
  }

  useEffect(() => {
    // GET request
    axios.get(`http://127.0.0.1:5000/${userInput}`)
    .then(response => {
        console.log(response.data);
        setApiData(response.data);
        setApi();
        console.log(apiData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  }, [gotInput]);


    return (
      <div>
      <TitleBar/>
      <div className='flex-vertical'>
        
        <Input inputNeeded={gotInput} onSubmit={setGotInput} inputValue={userInput} setInputValue={setInput} character={selectedAvatar} changeCharacter={avatarSelect}  />
        {console.log(userInput)}
        <PlayAudio checkData={gotApiData} gotAudio={isLoaded} setGotAudio={setIsLoaded}/> 
        <DisplayVideo ind={i} setInd={incrementI} inputNeeded={gotApiData} apiInput={apiData} character={selectedAvatar} gotAudio={isLoaded}/>
        
      </div>
      <Footer/>
      </div>
    );
    
}


export default App