import types from '../actions/types';
import cardData from '../components/gameEngine/cardData';
import character from '../components/gameEngine/playerStats.js';

//need to make sure character stats update playerBase

const Player1BASE = {
    health: 10,
    attack: 1,
    baseAtk:1,
    equip: null,
    hurt: false
}

const Player2BASE = {
    health: 10,
    attack: 1,
    baseAtk:1,
    equip: null,
    hurt: false
}

const DEFAULT_STATE = {
    player1:{...Player1BASE,
    },
    player2:{...Player2BASE,
    },
    p1Character:'',
    p2Character:''
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
                player1:{...Player1BASE
            },
            player2:{
                ...Player2BASE
            }
        };
        case types.DAMAGE:
            newState = {...state};
            newState.player1.hurt = false;
            newState.player2.hurt = false;
            return newState;
        case types.SETCHAR:
            Player1BASE.health =  character[action.payload.player1].health;
            Player1BASE.baseAtk = character[action.payload.player1].attack;
            Player1BASE.attack = character[action.payload.player1].attack;
            Player2BASE.health =  character[action.payload.player2].health;
            Player2BASE.baseAtk = character[action.payload.player2].attack;
            Player2BASE.attack = character[action.payload.player2].attack;
            return {
                player1:{...Player1BASE,
                },
                player2:{...Player2BASE,
                },
                p1Character: action.payload.player1,
                p2Character: action.payload.player2
            };
        default:
        
            return state;
    }
}


export default playerReducer;