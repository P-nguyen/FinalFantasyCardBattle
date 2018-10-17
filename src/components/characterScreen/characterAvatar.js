import React from 'react';
import '../../assets/css/selectChar.css';


const Avatar = (props) => {
    return (
    <div className='col'>
        <div className='frame' onClick={props.callback}>
            <div className='selCharacterImg' style={{backgroundImage:`url(${props.charInfo.img})`}}/>
            <div className='statsInfo'><p>H: {props.charInfo.health}</p><p>Atk: {props.charInfo.attack}</p></div>
        </div>

        <p>{props.name}</p>
    </div>
    );
}



export default Avatar;