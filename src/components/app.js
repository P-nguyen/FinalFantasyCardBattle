import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Card from './card';



const App = () => (
    <div>
        <div className="app">
            {/* 
            gameboard with cards
            player display 
            */}
            
            <Card/>
        </div>
    </div>
);

export default App;
