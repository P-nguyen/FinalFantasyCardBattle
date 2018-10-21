import React, { Component } from 'react';
import '../../assets/css/backgroundMusic.css';

import music from '../../assets/audio/Ayako Saso_Painful Battle.mp3';
var painfulBattle =  new Audio(music);

class BackgroundMusic extends Component{
    constructor(props){
        super(props);
        this.state = {
            play: true
        }
    }

    toggleMusic(){
        this.setState((state)=>{
                let musicStatus = !state.play;

                musicStatus ? painfulBattle.play() : painfulBattle.pause()

                return {
                    play:musicStatus
                }
            }
        );

    }

    componentDidMount(){
        painfulBattle.play();
        painfulBattle.loop = true;
    }

    render(){
        return(
            <div className={ this.props.gameStart ? 'musicWhite' : 'music' } onClick={this.toggleMusic.bind(this)}>MUSIC:{this.state.play ? <span>&#9208;</span> : <span>&#9658;</span>}</div>
        );
    }
}

export default BackgroundMusic;