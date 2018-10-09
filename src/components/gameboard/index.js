import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Card from '../card';
import cardData from '../gameEngine/CardData';

class GameBoard extends Component{

    addCardToField(){
        const stateDeck = this.props.stateDeck;
        var deck = [];
        
        for(var i = 0; i < 9; i++){
            deck.push(<Card key={i} cardData={cardData[stateDeck[i]]} />);
        }

        return deck;
    }

    render(){
        return(
            <div id ='gameBoard' className='container'>
                <div className='row'>
                    {this.addCardToField()}
                </div>
            </div>
        );
    };

}

function mapStateToProps(state){
    return {
        stateDeck: state.cardDeck.deck
    }
}

export default connect(mapStateToProps)(GameBoard);