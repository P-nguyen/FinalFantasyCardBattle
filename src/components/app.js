import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions'

import Game from './game';
import SplashScreen from './startScreen';


const App = (props) => (
    <div>
        {props.beginGame ?<Game /> : <SplashScreen start={props.startGame}/>}
    </div>
);

function mapStateToProps(state){
    return{
        beginGame: state.currentTurn.startGame
    };
}

export default connect(mapStateToProps,{ startGame})(App);

