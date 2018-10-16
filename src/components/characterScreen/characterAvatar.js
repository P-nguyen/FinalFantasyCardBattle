import React from 'react';
import '../../assets/css/selectChar.css';


const Avatar = (props)=>{
    return (
    <div className='col'>
      <div className='selCharacterImg' style={{backgroundImage:`url(${props.img})`}}/>
      <p>{props.name}</p>
    </div>
    );
}


export default Avatar;