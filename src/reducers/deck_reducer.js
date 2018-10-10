import types from '../actions/types';

const DEFAULT_STATE = {
    deck: [{name:'attack',revealed:false},
    {name:'attack',revealed:false},
    {name:'shield',revealed:false},
    {name:'bahamut',revealed:false},
    {name:'doubleStrike',revealed:false},
    {name:'tripleStrike',revealed:false},
    {name:'heal',revealed:false},
    {name:'doubleStrike',revealed:false},
    {name:'tripleStrike',revealed:false}]

};

function deckReducer( state = DEFAULT_STATE, action){
    switch(action.type){
        case types.REVEAL_CARD:
            return {deck: state.deck.map((obj, index)=>{
                let nObj = {};
                nObj.name = obj.name;
                if(action.payload.id === index){
                    nObj.revealed = true; 
                }else{
                    nObj.revealed = obj.revealed;
                }
                return nObj})
            };
        default:
            return state;
    }

}

export default deckReducer;