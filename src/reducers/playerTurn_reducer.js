import types from '../actions/types';

const DEFAULT_STATE = {
    currentTurn: 0,
    lastCardSeen:'',
    pause:false,
    displayCard: false,
    displayPlayerTurn: false,
    displayWin:false,
}

//add in pause state for displays.
//ie if pause is true then don't allow any clicks on cards
//if its false then allow pass through. "no return"

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
            return {...state, currentTurn: turn,
                lastCardSeen: action.payload.name,
                pause:true,
                displayCard:true,
                };
        case types.RANDOMIZE_DECK:
            return { ...state, lastCardSeen: ''}
        case types.UNPAUSE:
            return { ...state, pause:false, displayPlayerTurn:false, displayWin:false }
        case types.DISPLAYTURN:
            return { ...state, displayCard:false, displayWin:false, displayPlayerTurn:true}
        case types.DISPLAYWIN:
            return { ...state, displayWin:true, displayCard:false }
        default:
            return state;
    }
}

export default playerTurnReducer;