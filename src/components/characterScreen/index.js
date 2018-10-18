import React, { Component } from 'react';
import Characters from '../gameEngine/playerStats.js';

import Avatar from './characterAvatar.js';

class CharacterSelectionScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            p1:'',
            p2:'',
            turn:0
        };
    }

    createAvatars(){
        let keys = Object.keys(Characters);
        let avatars = [];
    
        keys.map((name,index)=>{
            avatars.push(<Avatar key={index} name={name} charInfo={Characters[name]} callback={this.selectChar.bind(this,name)}/>);
        });
        return avatars;
    }

    selectChar(name){
        this.setState((state)=>{
            let player = ''
            if(state.turn === 0){
                player = 'p1';
            }else if(state.turn === 1){
                player = 'p2';
            }else{
                return;
            }
            return{
            [player]:name,
            turn: state.turn + 1}
        });
    }

    render(){
        
        if(this.state.turn >= 2){
            this.props.setChar(this.state.p1, this.state.p2);
            setTimeout(this.props.select,1000);
        }

        return(
            <div className='CSel container text-center'>
                <h1>{this.state.turn <= 1 ? 'Character Selection' : 'Begin Fight!'}</h1>
                <div className='row charHolder'>
                    {this.createAvatars()}
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Player 1</h2>
                        <h3>{this.state.p1}</h3>
                    </div>
                    <div className='col'>
                        <h2>Player 2</h2>
                        <h3>{this.state.p2}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterSelectionScreen;