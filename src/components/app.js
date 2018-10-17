import React from 'react';
import { connect } from 'react-redux';
import { startGame, selectChar, setCharacters } from '../actions'

import Game from './game';
import SplashScreen from './startScreen';
import CharacterSelectionScreen from './characterScreen';

const App = (props) => (
    <div onMouseDown={(e)=>{e.preventDefault()}}> 
        {props.game.startGame ? <SplashScreen start={props.startGame}/> : ''}
        {props.game.selectChar ? <CharacterSelectionScreen select={props.selectChar} setChar={props.setCharacters}/> : '' }
        {props.game.dealCards && <Game />}
    </div>
);

function mapStateToProps(state){
    return{
        game: state.game
    };
}

export default connect(mapStateToProps,{ startGame, selectChar, setCharacters})(App);

