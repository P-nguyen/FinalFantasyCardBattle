import React,{ Component } from 'react';
import '../../assets/css/player.css';
var avatarStats = require('./playerStats.json');

class Player extends Component{
    constructor(props){
        super(props);

        this.health = 10;
        this.cardHeld = null; //holds name of card
        this.currentAttackPower = avatarStats[props.avatarName].attack;

    }

    render(){
        return (
            <div className='player'>{this.currentAttackPower}</div>
        );
    }
}


export default Player;