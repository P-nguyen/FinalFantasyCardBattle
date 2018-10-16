import React from 'react';
import '../../assets/css/player.css';
var avatarStats = require('./playerStats.json'); //will use when more characters exist.
import cloud from '../../assets/images/characters/cloud/cloud_sprite.png';

export default function Player( props ){
    
    return (
        <div className='player col-sm-3'>
            <div className='row text-center no-gutters'>
                <div className='col-sm-12 col-4'>
                    <div className='characterImg blink' style={{backgroundImage:`url(${cloud})`}}></div>
                    <h5>face</h5>
                </div>
                <div className='col-sm-12 col-4'>
                    <h1>{props.player.name}</h1>
                    <h2>Health:{props.player.health}</h2>
                    <h2>Attack:{props.player.attack}</h2>
                </div>
                <div className='col-sm-12 col-4'>
                    <h3>Equip</h3>
                    <h3>{props.player.equip ?props.player.equip : 'none'}</h3>
                    {/* eventually replace equip with card images */}
                </div>
            </div>
        </div>
    );
}
