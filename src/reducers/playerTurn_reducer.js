import types from '../actions/types';

const DEFAULT_STATE = {
    currentTurn: 0,
    lastCardSeen:''
}

//add in pause state for displays.

function playerTurnReducer( state=DEFAULT_STATE, action){
    switch(action.type){
        case types.REVEAL_CARD:
            let turn = state.currentTurn;
            if(action.payload.name === 'attack'){
                if(state.lastCardSeen === 'attack'){
                    turn = ++state.currentTurn;
                }
            }else{
                turn = ++state.currentTurn;
            }
            return { currentTurn: turn,
                lastCardSeen: action.payload.name
                };
        case types.RANDOMIZE_DECK:
            return { ...state, lastCardSeen: ''}
        default:
            return state;
    }
}

export default playerTurnReducer;