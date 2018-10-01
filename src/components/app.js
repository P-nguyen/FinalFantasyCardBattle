import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Player from './player';
import Card from './card';



const App = () => (
    <div>
        <div className="app">
            {/* 
            gameboard with cards
            player display 
            */}
            
            <Card/>
            <Player avatarName='Ramsus'/>
        </div>
    </div>
);

export default App;
