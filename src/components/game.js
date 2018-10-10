import React,{ Component } from 'react';
import '../assets/css/game.css';
import Player from './player';
import GameBoard from './gameBoard';



class Game extends Component{

    render(){
        return (
            <div id ='game' className='row no-gutters'>

                <Player avatarName='Ramsus' />
                
                <GameBoard />
            
                <Player avatarName='Cloud' />

            </div>
        );
    }
}


export default Game;