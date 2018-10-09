import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';


const rootReducer = combineReducers(
    {
        cardDeck: deckReducer
    }
);

export default rootReducer;