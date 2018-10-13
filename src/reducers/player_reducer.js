import types from '../actions/types';
import cardData from '../components/gameEngine/CardData';


const DEFAULT_STATE = {
    player1:{
        name: 'p1',
        health: 10,
        attack: 1,
        baseAtk:1,
        equip: null
    },
    player2:{
        name: 'p2',
        health: 10,
        attack: 1,
        baseAtk:1,
        equip: null
    }
};

function playerReducer( state = DEFAULT_STATE, action){
    switch(action.type){
        case types.CHECK_ABILITY:
            let newState;
            if(action.payload.currentTurn === 0){
                let array = cardData[action.payload.name].ability(state.player1, state.player2);
                newState = {player1:array[0], player2:array[1]};
            }else{
                let array = cardData[action.payload.name].ability(state.player2, state.player1);
                newState = {player1:array[1], player2:array[0]};
            }
            return newState;
        case types.RESETPLAYERS:
            return {...state,
                player1:{
                name: 'p1',
                health: 10,
                attack: 1,
                baseAtk:1,
                equip: null
            },
            player2:{
                name: 'p2',
                health: 10,
                attack: 1,
                baseAtk:1,
                equip: null
            }
        };
        default:
            return state;
    }
}


export default playerReducer;