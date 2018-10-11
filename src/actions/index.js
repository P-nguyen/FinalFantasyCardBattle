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

export function randomizeDeck(array){
    
    let newArrayOrder = [];
    let arrayLength = array.length-1;

    while(newArrayOrder.length <= arrayLength){
        let rndNumber = Math.floor(Math.random()*array.length);

        newArrayOrder.push(array[rndNumber]);
        array.splice([rndNumber],1);
    }

    return {
        type: types.RANDOMIZE_DECK,
        payload: newArrayOrder
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