import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1>Hello from V2</h1>

                <a href='exp://192.168.1.134:19000/--/'>Deeplinking test</a>
            </header>
        </div>
    );
}

export default App;
