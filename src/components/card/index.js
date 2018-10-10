import React from 'react';
import '../../assets/css/card.css';
import cardBack from '../../assets/images/cards/cardBack.jpg';
import cardData from '../gameEngine/CardData';


const Card = (props)=>{
    return (
    <div className='col-4'>
        <div className="cardContainer mx-auto d-block" onClick={props.revealCard}>
            <div className={props.cardData.revealed ? "card flipper revealed" : "card flipper"}>
                <img className="back" src={cardBack}/>
                <img className="front" src={cardData[props.cardData.name].address}/>
            </div>
        </div>
    </div>
    );
}


export default Card;