import React from 'react';
import './AvatarSelection.css';

import img1 from './images/Select/Smile.jpg'
import img2 from './images/Select/Smile1.PNG'

function AvatarSelection(){
    return <div className='flex-horizontal'>
    <img src={img1} width="200px" height="400px"/>
    <img src={img2} width="200px" height="400px"/>

    </div>
}

export default AvatarSelection