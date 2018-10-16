import types from '../actions/types';

const DEFAULT_STATE = {
    startGame: true,
    selectChar:false,
    dealCards: false
}

function gameReducer( state=DEFAULT_STATE, action){
    switch(action.type){
        case types.STARTGAME:
            return { ...state, startGame:false, selectChar:true}
        case types.SELECTCHAR:
            return { ...state, selectChar:false, dealCards:true}
        // case types.DEALCARDS:
        //     return { ...state, dealCards:true}
        default:
            return state;
    }
}

export default gameReducer;