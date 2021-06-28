import './index.css';
import ReactDOM from 'react-dom';
import Panel from './panel';
import Start2 from './start2';
import firebase from './firebase';
import { sha256 } from 'js-sha256';

export function Login() {
  var code, Data;
  code = document.getElementById("code").value;
  if(sha256(code) === "fd5f56b40a79a385708428e7b32ab996a681080a166a2206e750eb4819186145"){
    ReactDOM.render(<Start2/>, document.getElementById('root'));
  }
  else{
    return(
      firebase.database().ref("user").orderByChild("code").equalTo(sha256(code)).once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          Data = childSnapshot.val();
        })
        if(Data !== undefined){
          if(Data.status === "pending"){
            ReactDOM.render(<Panel code={Data.code}/>, document.getElementById('root'));
          }
          else{
            document.getElementById("error").innerHTML = "Jūs jau pateikėte duomenis";
          }
        }
        else{
          document.getElementById("error").innerHTML = "Tokio vartotojo nėra";
        }
      })
    );
  }
}