import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';
import playerReducer from './player_reducer';

const rootReducer = combineReducers(
    {
        cardDeck: deckReducer,
        players: playerReducer
    }
);

export default rootReducer;