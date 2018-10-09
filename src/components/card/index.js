import React,{ Component } from 'react';
import '../../assets/css/card.css';
import cardBack from '../../assets/images/cards/cardBack.jpg';

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
        <div className='col-4'>
            <div className="cardContainer mx-auto d-block" onClick={this.revealCard.bind(this)}>
                <div className={this.state.revealed ? "card flipper revealed" : "card flipper"}>
                    <img className="back" src={cardBack}/>
                    {/* <div className="back">yay</div> */}
                    <div className="front">yay</div>
                </div>
            </div>
        </div>
        );
    }
}


export default Card;