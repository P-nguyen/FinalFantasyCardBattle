import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';
import playerReducer from './player_reducer';
import playerTurnReducer from './playerTurn_reducer';
import gameReducer from './game_reducer';

const rootReducer = combineReducers(
    {
        cardDeck: deckReducer,
        players: playerReducer,
        currentTurn: playerTurnReducer,
        game: gameReducer
    }
);

export default rootReducer;