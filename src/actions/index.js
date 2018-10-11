import types from './types';


export function revealCard( id, name){
    return {
        type: types.REVEAL_CARD,
        payload: {
            id: id,
            name: name
        }
    }
}

export function randomizeDeck(){
    return {
        type: types.RANDOMIZE_DECK
    }
}

export function checkAbility(name, currentTurn){
    return {
        type: types.CHECK_ABILITY,
        payload: {
            name: name,
            currentTurn: currentTurn%2
        }
    }
}