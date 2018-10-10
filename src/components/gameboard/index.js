import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { revealCard, randomizeDeck } from '../../actions';

import Card from '../card';


class GameBoard extends Component{

    revealChildCard(id){
            this.props.revealCard(id);
    }

    addCardToField(){
        const stateDeck = this.props.stateDeck;
        var deck = [];
        for(var i = 0; i < 9; i++){
            deck.push(<Card key={i} id={i} cardData={stateDeck[i]} revealCard={this.revealChildCard.bind(this,i)} />);
        }

        return deck;
    }

    componentDidMount(){
        this.props.randomizeDeck();
    }

    render(){
        return(
            <div id ='gameBoard' className='col-sm-6'>
                <div className='row no-gutters'>
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

export default connect(mapStateToProps, { revealCard, randomizeDeck })(GameBoard);
