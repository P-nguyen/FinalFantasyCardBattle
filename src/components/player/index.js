import React from 'react';
import '../../assets/css/player.css';
import characters from '../gameEngine/playerStats.js';
import cardData from '../gameEngine/cardData.js';
import cardBack from '../../assets/images/cards/cardBack.jpg';

export default function Player( props ){
    let imgStyle = {
        backgroundImage:`url(${characters[props.character].img})`,
    }
    if(props.reverse){
        var reverse = {transform : 'scaleX(-1)'};
    }
    return (
        <div className={props.reverse ? 'player col-sm-3 p1Back' : 'player col-sm-3 p2Back'}>
            <div className='row text-center no-gutters'>
                <div className='col-sm-12 col-4' style={reverse}>
                    <div className={props.player.hurt ? 'characterImg hurt':'characterImg blink'} style={imgStyle}></div>
                </div>
                <div className='col-sm-12 col-4'>
                      <h5>{props.character}</h5>
                    <h3>Health:<span>{props.player.health}</span></h3>
                    <h3>Attack:<span>{props.player.attack}</span></h3>
                </div>
                <div className='col-sm-12 col-4'>
                    {props.player.equip ?  <img src={cardData[props.player.equip].address}/> : <img src={cardBack}/>}
                    <h5>Equip</h5>
                </div>
            </div>
        </div>
    );
}
