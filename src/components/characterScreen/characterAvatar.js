import React from 'react';
import '../../assets/css/selectChar.css';


const Avatar = (props) => {
    const select = props.playerSInfo.p1 === props.name || props.playerSInfo.p2 === props.name;
    return (
    <div className='col col-sm-2'>
        <div className='frame' onClick={props.callback}>
            <div className='selCharacterImg' style={{backgroundImage:`url(${props.charInfo.img})`}}/>
            <div className='statsInfo'><p>H: {props.charInfo.health}</p><p>Atk: {props.charInfo.attack}</p></div>
            {select ? <div className='pSelect'>
                {props.name === props.playerSInfo.p1 ? <div>P1</div> : ''}
                {props.name === props.playerSInfo.p2 ? <div>P2</div> : ''}
            </div> : ''}
            
        </div>

        <p>{props.name}</p>
    </div>
    );
}



export default Avatar;