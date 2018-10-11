import types from '../actions/types';

const DEFAULT_STATE = {
    player1:{
        name: 'p1',
        health: 10,
        attack: 1,
        equip: null
    },
    player2:{
        name: 'p2',
        health: 10,
        attack: 1,
        equip: null
    }
};

function playerReducer( state = DEFAULT_STATE, action){
    switch(action.type){
        case types.REVEAL_CARD:
            console.log(action.payload.name);
            //check to see if its an attack card. or bahamut
            //otherwise its an equip or heal.
            return state;
        default:
            return state;
    }
}

export default playerReducer;