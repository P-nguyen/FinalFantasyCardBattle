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