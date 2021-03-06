import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { revealCard, randomizeDeck, checkAbility, unrevealCards, unPause, unDamagePlayer } from '../../actions';

import Card from '../card';


class GameBoard extends Component{

    revealChildCard(id, name, pTurn){
            if(this.props.turnInfo.pause || this.props.stateDeck[id].revealed === true){
                return;
            }

            this.props.revealCard(id, name);

            //issue with atk logic on how its seen
            if(name === 'attack'){
                if(this.props.turnInfo.lastCardSeen === 'attack'){
                    this.props.checkAbility(name, pTurn);
                    setTimeout(this.props.randomizeDeck,1000, this.props.stateDeck);
                }
            }else if (name === 'bahamut'){
                if(this.props.turnInfo.lastCardSeen === 'attack'){
                    setTimeout(this.props.unrevealCards, 1000, this.props.stateDeck, id);
                }else{
                    this.props.checkAbility(name, pTurn);
                    setTimeout(this.props.randomizeDeck,1000, this.props.stateDeck);
                }
            }else{
                if(this.props.turnInfo.lastCardSeen === 'attack'){
                    setTimeout(this.props.unrevealCards, 1000, this.props.stateDeck, id);
                }else{
                    this.props.checkAbility(name, pTurn);
                }
            }

            setTimeout(this.props.unDamagePlayer,1500);
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
            <div id ='gameBoard' className={ this.props.turnInfo.currentTurn%2 ? 'col-md-6 text-center gameBoardP2' : 'col-md-6 text-center gameBoardP1'}>
                <div className='cardBoard row no-gutters align-items-center'>
                    <div className='col'>
                        <div className='row'>
                            {this.addCardToField()}
                        </div>
                    </div>
                    <h1 className='col-12'>{ this.props.turn%2 ? this.props.player2Char + "'s turn" : this.props.player1Char + "'s turn"}</h1>
                </div>
            </div>
        );
    };

}

function mapStateToProps(state){
    return {
        stateDeck: state.cardDeck.deck,
        turnInfo: state.currentTurn,
        player1Char:state.players.p1Character,
        player2Char:state.players.p2Character

    }
}

export default connect(mapStateToProps, { revealCard, randomizeDeck, checkAbility, unrevealCards, unPause, unDamagePlayer })(GameBoard);
