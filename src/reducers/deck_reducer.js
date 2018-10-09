import types from '../actions/types';

const DEFAULT_STATE = {
    deck: ['attack','attack','shield','bahamut','doubleStrike','tripleStrike','heal','doubleStrike','tripleStrike']
};

function deckReducer( state = DEFAULT_STATE, action){

    switch(action){
        default:
        return state;
    }

}

export default deckReducer;