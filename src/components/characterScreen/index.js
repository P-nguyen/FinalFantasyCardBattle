import React from 'react';
import Characters from '../player/playerStats';

import Avatar from './characterAvatar.js';

const CharacterSelectionScreen = ()=>{
    let keys = Object.keys(Characters);
    let avatars = [];

    keys.map((name,index)=>{
        avatars.push(<Avatar key={index} name={name} img={Characters[name].img}/>);
    });

    return(
        <div className='CSel container text-center'>
            <h1>Character Selection</h1>
            <div className='row charHolder'>
                {avatars}
            </div>
        </div>
    );
}

export default CharacterSelectionScreen;