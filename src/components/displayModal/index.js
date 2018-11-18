import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { displayTurn, displayWin, unPause, resetPlayers, randomizeDeck } from '../../actions';

import '../../assets/css/displayModal.css'
import cardData from '../gameEngine/cardData';
import charData from '../gameEngine/playerStats';

function DisplayModal(props){

        let winText = '';
        if(props.player1Health <= 0 && props.player2Health <= 0){
            winText = 'DRAW!'
        }else if(props.player1Health <= 0){
            winText = 'Player 2 Wins!';
        }else if (props.player2Health <= 0){
            winText = 'Player 1 Wins!';
        }

        return(
            <div className={props.turnInfo.pause ? "display-modal show": "display-modal"}>
                <div className="display-modal-content row align-items-center">
                    {props.turnInfo.displayCard && <BasicReveal name={props.turnInfo.lastCardSeen} callback={winText? props.displayWin : props.displayTurn}/>}
                    {props.turnInfo.displayWin && <WinModal text={winText} callback={props.displayTurn} resetPlayers={props.resetPlayers} resetDeck={props.randomizeDeck.bind(this, props.deck)}/>}
                    {props.turnInfo.displayPlayerTurn && <PlayerTurn turn={props.turnInfo} player1Char={props.player1Char} player2Char={props.player2Char} callback={props.unPause}/>}
                </div>
            </div>  
        );
    
}

class BasicReveal extends Component{
    componentDidMount(){
        setTimeout(this.props.callback, 1000);
   }

    render(){
        return(
        <div className="col-12 text-center">
            <img src={this.props.name && cardData[this.props.name].address} className="mx-auto d-block"/>
        </div>
        );
    }
}

class WinModal extends Component{
    componentDidMount(){
        setTimeout(this.props.callback,2000);
    }

    componentWillUnmount(){
        this.props.resetDeck();
        this.props.resetPlayers();
    }

    render(){
        return(
        <div className="col-12 text-center">
            <h1>{this.props.text}</h1>
        </div>
        );
    }
}

class PlayerTurn extends Component{
    componentDidMount(){
        setTimeout(this.props.callback, 1500);
    }

    render(){
        var imgStyle = this.props.turn.currentTurn%2 ?  {} : {transform : 'scaleX(-1)'};
  
        return(<div className="col-12 text-center">
            <img src={this.props.turn.currentTurn%2 ? charData[this.props.player2Char].img : charData[this.props.player1Char].img} className="displayCharImg blink mx-auto d-block" style={imgStyle}/>
            <h1>{this.props.turn.currentTurn%2 ? this.props.player2Char + "'s turn" : this.props.player1Char + "'s turn"}</h1>
        </div>)
    }
}


function mapStateToProps(state){
    return {
        deck:state.cardDeck.deck,
        turnInfo: state.currentTurn,
        player1Health: state.players.player1.health,
        player2Health: state.players.player2.health,
        player1Char:state.players.p1Character,
        player2Char:state.players.p2Character

    }
}

export default connect(mapStateToProps, { displayTurn, displayWin, unPause, resetPlayers, randomizeDeck })(DisplayModal);
