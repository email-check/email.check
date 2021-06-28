import './index.css';
import logo from './logo.png';
import { Login } from './login';
import React, { useState } from 'react';

function Start() {
  var code = /^[0-9]+$/;
  const [TempCode, setTempCode] = useState('');
  var c = "";
  var t;
  for(var i = 0; i < TempCode.length; i++){
    t = TempCode.charAt(i);
    if(t.match(code)){
      c = c + t;
    }
  }
  return (
    <div className="page-start">
      <img src={logo} className="logo" alt="Hegelmann logo"/>
      <div className="small-container">
        <div className="content">
          <h2>Sveiki, atvykę!</h2>
          <input id="code" className="input" type="text" value={c} onChange={event => setTempCode(event.target.value)} maxLength="11" placeholder="Asmens kodas"/>
          <div id="error"/>
          <button className="menubutton" onClick={() => Login()}>Prisijungti</button>
        </div>
      </div>
    </div>
  );
}
export default Start;