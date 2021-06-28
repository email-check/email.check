import './index.css';
import firebase from './firebase';
import { Check } from './check';
import React, { useState } from 'react';

function Panel(props) {
  var Data, ID;
  var email = /^[0-9a-zA-Z@.-_]+$/;
  const [Email, setEmail] = useState('');
  var e = "";
  var t;
  for(var i = 0; i < Email.length; i++){
    t = Email.charAt(i);
    if(t.match(email)){
      e = e + t;
    }
  }
  return (
    firebase.database().ref("user").orderByChild("code").equalTo(props.code).once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        Data = childSnapshot.val();
        ID = childSnapshot.key;
      })
      document.getElementById("data").innerHTML = "Vardas: " + Data.name + "<br/>Pavardė: " + Data.surname + "<br/>Įmonė: " + Data.company;
    }),
    <div className="page-panel">
      <div className="small-container">
        <div className="content">
          <div className="data" id="data">Vardas<br/>Pavardė<br/>Įmonė</div>
          <div className="data-text">Jeigu viršuje pateikti duomenys yra jūsų, pateikite savo elektroninį paštą į kurį norėsite gauti algąlapius.</div>
          <input id="email" className="input" type="text" value={e} onChange={event => setEmail(event.target.value)} placeholder="Elektroninis paštas"/>
          <button className="menubutton" onClick={() => Check(ID, props.code)}>Pateikti</button>
        </div>
      </div>
    </div>
  );
}
export default Panel;