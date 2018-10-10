import types from './types';


export function revealCard( id){
    return {
        type: types.REVEAL_CARD,
        payload: {
            id: id
        }
    }
}