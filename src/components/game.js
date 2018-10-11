import React,{ Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/game.css';
import Player from './player';
import GameBoard from './gameBoard';


function Game(props){
    return (
        
            <div id ='game' className='row no-gutters'>

                <Player player={props.player1}/>
                
                <GameBoard turn={props.currentTurn}/>
            
                <Player player={props.player2} />

            </div>
    );
}

function mapStateToProps(state){
    return{
        player1:state.players.player1,
        player2:state.players.player2,
        currentTurn: state.currentTurn.currentTurn
    };
}

export default connect(mapStateToProps)(Game);