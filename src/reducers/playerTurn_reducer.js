import types from '../actions/types';

const DEFAULT_STATE = {
    currentTurn: 0
}

//if attackcard is pulled DO NOT PROGRESS UNTIL two attackcards exist.

function playerTurnReducer( state=DEFAULT_STATE, action){
    switch(action.type){
        case types.REVEAL_CARD:
            return { currentTurn: ++state.currentTurn};
        default:
            return state;
    }
}

export default playerTurnReducer;