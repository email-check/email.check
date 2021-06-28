import './index.css';
import ReactDOM from 'react-dom';
import Panel2 from './panel2';
import firebase from './firebase';
import { sha256 } from 'js-sha256';

export function Login2() {
  var username, password, Data;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  return(
    firebase.database().ref("admin").once("value", (snapshot) => {
      Data = snapshot.val();
      if((Data.username === sha256(username))&&(Data.password === sha256(password))){
        ReactDOM.render(<Panel2/>, document.getElementById('root'));
      }
    })
  );
}