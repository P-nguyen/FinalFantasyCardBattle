import React,{ Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/game.css';
import Player from './player';
import GameBoard from './gameBoard';
import DisplayModal from './displayModal';

function Game(props){
    return (
            <div id ='game' className='row no-gutters text-center'>
                <div className='col-12 row banner'>
                    <h1 className='align-self-center'>Final Fantasy Card Battle</h1>
                </div>
                <div className='gameContainer'>
                    <Player player={props.player1} character={props.p1Char} reverse={true}/>
                    
                    <GameBoard turn={props.currentTurn.currentTurn}/>
                
                    <Player player={props.player2} character={props.p2Char} />
                </div>
                <DisplayModal/>

            </div>
    );
}

function mapStateToProps(state){
    return{
        player1:state.players.player1,
        player2:state.players.player2,
        p1Char:state.players.p1Character,
        p2Char:state.players.p2Character,
        currentTurn: state.currentTurn
    };
}

export default connect(mapStateToProps)(Game);