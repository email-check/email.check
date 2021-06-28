import './index.css';
import logo from './logo.png';
import { Login2 } from './login2';
import React, { useState } from 'react';

function Start2() {
  var t;
  var u = "";
  var p = "";
  var username = /^[0-9a-zA-Z]+$/;
  var password = /^[0-9a-zA-Z]+$/;
  const [Username, setUsername] = useState('');
  for(var i = 0; i < Username.length; i++){
    t = Username.charAt(i);
    if(t.match(username)){
      u = u + t;
    }
  }
  const [Password, setPassword] = useState('');
  for(var j = 0; j < Password.length; j++){
    t = Password.charAt(j);
    if(t.match(password)){
      p = p + t;
    }
  }
  return (
    <div className="second">
      <div className="page-start">
        <img src={logo} className="logo" alt="Hegelmann logo"/>
        <div className="small-container">
          <div className="content">
            <h2>Sveiki, atvykę?</h2>
            <input id="username" className="input" type="text" value={u} onChange={event => setUsername(event.target.value)} maxLength="20" placeholder="Prisijungimo vardas"/>
            <input id="password" className="input" type="password" value={p} onChange={event => setPassword(event.target.value)} maxLength="20" placeholder="Prisijungimo slaptažodis"/>
            <button className="menubutton" onClick={() => Login2()}>Prisijungti</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Start2;