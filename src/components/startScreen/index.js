import React from 'react';
import '../../assets/css/startScreen.css';
import splashScreen from '../../assets/images/intro_ffCardbattle.jpg';

export default (props) => {

    return(
        <div className="startScreenModal">
            <div className="startScreenModal-content">
                <img src={splashScreen}/>
                <button className="startButton" onClick={props.start}>START GAME</button>
                <p>Equip yourself with powerups and match the ATK card to defeat the other player.</p>
                <p>But watchout for Bahamut! He'll hurt everyone and reset the board!</p>
            </div>
        </div>
    );
}