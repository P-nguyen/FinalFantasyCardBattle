import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { nextDisplay, unPause } from '../../actions';

import '../../assets/css/displayModal.css'
import cardData from '../gameEngine/CardData';

function DisplayModal(props){

        return(
            <div className={props.turnInfo.pause ? "display-modal show": "display-modal"}>
                <div className="display-modal-content row align-items-center">
                    {props.turnInfo.displayCard && <BasicReveal name={props.turnInfo.lastCardSeen} callback={props.nextDisplay}/>}
                    {props.turnInfo.displayPlayerTurn && <PlayerTurn turn={props.turnInfo} callback={props.unPause}/>}
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


class PlayerTurn extends Component{
    componentDidMount(){
        setTimeout(this.props.callback, 1000);
    }

    render(){

        return(<div className="col-12 text-center">
            <h1>{this.props.turn.currentTurn%2 ? 'Player 2 Turn' : 'Player 1 turn'}</h1>
        </div>)
    }
}
// function WinModal(){

// }


//pause happens.
//always activate reveal card
//once reveal is finished run animations

    //look at player stats
    //if one is dead Congrates happens
    //else nothing and move on.

//show next player turn
//unpause

function mapStateToProps(state){
    return {
        turnInfo: state.currentTurn
    }
}

export default connect(mapStateToProps, { nextDisplay, unPause })(DisplayModal);
