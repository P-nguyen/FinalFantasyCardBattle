import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { revealCard, randomizeDeck, checkAbility } from '../../actions';

import Card from '../card';


class GameBoard extends Component{

    revealChildCard(id, name, pTurn){
            this.props.revealCard(id, name);
            this.props.checkAbility(name,pTurn);
    }

    addCardToField(){
        const stateDeck = this.props.stateDeck;
        var deck = [];
        for(var i = 0; i < 9; i++){
            deck.push(<Card key={i} id={i} cardData={stateDeck[i]} revealCard={this.revealChildCard.bind(this,i,stateDeck[i].name, this.props.turn)} />);
        }

        return deck;
    }

    componentDidMount(){
        this.props.randomizeDeck();
    }

    render(){
        return(
            <div id ='gameBoard' className='col-sm-6 text-center'>
                <div className='row no-gutters'>
                    {this.addCardToField()}
                </div>
                <h1>{ this.props.turn%2 ? 'Player 2' : 'Player 1'}</h1>
            </div>
        );
    };

}

function mapStateToProps(state){
    return {
        stateDeck: state.cardDeck.deck

    }
}

export default connect(mapStateToProps, { revealCard, randomizeDeck, checkAbility })(GameBoard);
