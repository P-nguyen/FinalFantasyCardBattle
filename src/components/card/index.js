import React,{ Component } from 'react';
import '../../assets/css/card.css';
import cardBack from '../../assets/images/cards/cardBack.jpg';


class Card extends Component{
    constructor(props){
        console.log(props)
        super(props);
        this.state = {
            revealed : false
        }
    }

    revealCard(){

        this.setState({
            revealed : true
        });

    }

    render(){
        return (
        <div className='col-4'>
            <div className="cardContainer mx-auto d-block" onClick={this.revealCard.bind(this)}>
                <div className={this.state.revealed ? "card flipper revealed" : "card flipper"}>
                    <img className="back" src={cardBack}/>
                    {/* <div className="back">yay</div> */}
                    <img className="front" src={this.props.cardData.address}/>
                </div>
            </div>
        </div>
        );
    }
}


export default Card;