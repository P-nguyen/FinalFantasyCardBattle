import React, { Component } from 'react';
import '../../assets/css/player.css';
import characters from '../gameEngine/playerStats.js';
import cardData from '../gameEngine/cardData.js';
import cardBack from '../../assets/images/cards/cardBack.jpg';

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentHealth: this.props.player.health,
            healthDamage: false,
            healthHeal: false
        }
        this.resetHealthState = this.resetHealthState.bind(this);
    }

    componentDidUpdate(){
        if( this.state.currentHealth != this.props.player.health){
            var damage = false; 
            var heal = false;

            if(this.state.currentHealth > this.props.player.health){
                damage = true;
                setTimeout(this.resetHealthState, 2500);
                //set callback here
            }else{
                heal = true;
                setTimeout(this.resetHealthState, 2500);
                //set callback here
            }

            this.setState({
                currentHealth: this.props.player.health,
                healthDamage: damage,
                healthHeal: heal
            });
            console.log('change has happened');
        }
    }

    resetHealthState(){
        this.setState(
            {   healthDamage: false,
                healthHeal: false}
        );
    }

    checkHealthChange(){
        if (this.state.healthDamage === true){
            return 'pulsateRed'
        }else if (this.state.healthHeal === true){
            return 'pulsateGreen'
        }
    }

    render(){
        let imgStyle = {
            backgroundImage:`url(${characters[this.props.character].img})`,
        }
        if(this.props.reverse){
            var reverse = {transform : 'scaleX(-1)'};
        }

        return (
            <div className={this.props.reverse ? 'player col-sm-3 p1Back' : 'player col-sm-3 p2Back'}>
                <div className='row text-center no-gutters'>
                    <div className='col-sm-12 col-4' style={reverse}>
                        <div className={this.props.player.hurt ? 'characterImg hurt':'characterImg blink'} style={imgStyle}></div>
                    </div>
                    <div className='col-sm-12 col-4'>
                        <h5>{this.props.character}</h5>
                        <h3 className={this.checkHealthChange()}>Health:<span>{this.props.player.health}</span></h3>
                        <h3>Attack:<span>{this.props.player.attack}</span></h3>
                    </div>
                    <div className='col-sm-12 col-4'>
                        {this.props.player.equip ?  <img src={cardData[this.props.player.equip].address}/> : <img src={cardBack}/>}
                        <h5>Equip</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;