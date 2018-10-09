import React,{ Component } from 'react';
import '../assets/css/game.css';
import Player from './player';
import Card from './card';

class Game extends Component{

    addCardToField(){

        var deck = [];
        
        for(var i = 0; i < 9; i++){
            deck.push(<Card key={i} />);
        }

        return deck;
    }

    render(){
        return (
            <div id ='game'>

                <Player avatarName='Ramsus'/>
                
                <div id ='gameBoard' className='container'>
                    <div className='row'>
                        {this.addCardToField()}
                    </div>
                </div>
            
                <Player avatarName='Cloud'/>

            </div>
        );
    }
}


export default Game;