import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { revealCard, randomizeDeck, checkAbility, unrevealCards, unPause } from '../../actions';

import Card from '../card';


class GameBoard extends Component{

    revealChildCard(id, name, pTurn){

            if(this.props.turnInfo.pause){
                return;
            }

            this.props.revealCard(id, name);

            //issue with atk logic on how its seen
            if(name === 'attack'){
                if(this.props.turnInfo.lastCardSeen === 'attack'){
                    this.props.checkAbility(name, pTurn);
                    //flip all recent cards back
                }
                    // setTimeout(this.props.unPause,1000);
            }else if (name === 'bahamut'){
                if(this.props.turnInfo.lastCardSeen === 'attack'){
                    setTimeout(this.props.unrevealCards, 1000, this.props.stateDeck, id);
                }else{
                    this.props.checkAbility(name, pTurn);
                    //reset all cards.
                }
            }else{
                if(this.props.turnInfo.lastCardSeen === 'attack'){
                    setTimeout(this.props.unrevealCards, 1000, this.props.stateDeck, id);
                }else{
                    this.props.checkAbility(name, pTurn);
                }
            }
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
        this.props.randomizeDeck(this.props.stateDeck);
    }

    render(){
        return(
            <div id ='gameBoard' className='col-sm-6 text-center'>
                <div className='row no-gutters'>
                    {this.addCardToField()}
                </div>
                <h1>{ this.props.turn%2 ? 'Player 2 Turn' : 'Player 1 Turn'}</h1>
            </div>
        );
    };

}

function mapStateToProps(state){
    return {
        stateDeck: state.cardDeck.deck,
        turnInfo: state.currentTurn

    }
}

export default connect(mapStateToProps, { revealCard, randomizeDeck, checkAbility, unrevealCards, unPause })(GameBoard);
