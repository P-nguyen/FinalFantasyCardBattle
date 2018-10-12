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

        array[rndNumber].revealed = false;
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

export function unrevealCards( array, index ){
    for(var i = 0; i < array.length; i++){
        if (array[i].name === 'attack'){
            array[i].revealed = false;
        }
    }

    array[index].revealed = false;
    return{
        type: types.UNREVEAL_CARDS,
        payload:array
    }
}