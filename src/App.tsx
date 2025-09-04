//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {useState} from "react";

function App() {
    const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function getName(): string {
        if (typeof name !== 'string') {
            return setError('Invalid name');
            }
        return name;
    }
    // function getPassword(): string {
    //     if (typeof name !== 'string') {
    //         return setError('Invalid name')
    //     }
    //     return password;
    // }
  return (
    <>
        <div className="container-name"> {/*enter your name*/}
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <p>{error}</p>
        </div>
        <div className="container-pass"> {/*enter your password*/}
            <input type="password"/>
        </div>
        <div className="container-button"> {/*push the button*/}
            <button onClick={getName}>Sigh Up</button>
        </div>
        <div className="container-result">
            <p>Ваше имя: {name}</p>
        </div>
    </>
  )
}

export default App
