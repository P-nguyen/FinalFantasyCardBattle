import React,{ Component } from 'react';
import '../../assets/css/player.css';
var avatarStats = require('./playerStats.json');

class Player extends Component{
    constructor(props){
        super(props);

        this.health = avatarStats[props.avatarName].health;
        this.cardHeld = null; //holds name of card
        this.currentAttackPower = avatarStats[props.avatarName].attack;
        this.avatarName = props.avatarName;

    }

    render(){
        return (
            <div className='player'>
            <h1>{this.avatarName}</h1>
            <h2>{this.health}</h2>
            <h2>{this.currentAttackPower}</h2>
            </div>
        );
    }
}


export default Player;