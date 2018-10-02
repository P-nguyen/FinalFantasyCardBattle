import React,{ Component } from 'react';
import '../../assets/css/card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            revealed : false
        }
    }

    revealCard(){
        console.log('hellow');

        this.setState({
            revealed : true
        });

    }

    render(){
        console.log(this.state);

        return (
        <div className="cardContainer" onClick={this.revealCard.bind(this)}>
            <div className={this.state.revealed ? "card flipper revealed" : "card flipper"}>
                {/* <img className="back">yay</img> */}
                <div className="back">yay</div>
                <div className="front">yay</div>
            </div>
        </div>
        );
    }
}


export default Card;