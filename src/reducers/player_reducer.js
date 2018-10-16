import types from '../actions/types';
import cardData from '../components/gameEngine/cardData';

const PlayerBASE = {
        health: 10,
        attack: 1,
        baseAtk:1,
        equip: null,
        hurt: false

}
const DEFAULT_STATE = {
    player1:{...PlayerBASE,
    },
    player2:{...PlayerBASE,
    },
    p1Character:'Wol',
    p2Character:'Cloud'
};

function playerReducer( state = DEFAULT_STATE, action){
    switch(action.type){
        case types.CHECK_ABILITY:
            let newState;
            if(action.payload.currentTurn === 0){
                let array = cardData[action.payload.name].ability(state.player1, state.player2);
                newState = {...state, player1:array[0], player2:array[1]};
            }else{
                let array = cardData[action.payload.name].ability(state.player2, state.player1);
                newState = {...state, player1:array[1], player2:array[0]};
            }
            return newState;
        case types.RESETPLAYERS:
            return {...state,
                player1:{...PlayerBASE
            },
            player2:{
                ...PlayerBASE
            }
        };
        case types.DAMAGE:
            newState = {...state};
            newState.player1.hurt = false;
            newState.player2.hurt = false;
            return newState;
        default:
            return state;
    }
}


export default playerReducer;