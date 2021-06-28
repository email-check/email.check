import './index.css';
import firebase from './firebase';
import {Submit} from './submit';
import ReactDOM from 'react-dom';
import Panel from './panel';

function Confirm(props) {
  var Data, ID;
  return (
    firebase.database().ref("user").orderByChild("code").equalTo(props.code).once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        Data = childSnapshot.val();
        ID = childSnapshot.key;
      })
      document.getElementById("data").innerHTML = "Vardas: " + Data.name + "<br/>Pavardė: " + Data.surname + "<br/>Įmonė: " + Data.company + "<br/>Paštas: " + Data.email;
    }),
    <div className="page-panel">
      <div className="small-container">
        <div className="content">
          <div className="data" id="data">Vardas<br/>Pavardė<br/>Įmonė<br/>Elektroninis paštas</div>
          <div className="data-text">Ar pateikti duomenys yra teisingi</div>
          <button className="menubutton" onClick={() => Submit(ID)}>Taip</button>
          <button className="menubutton" onClick={() => ReactDOM.render(<Panel code={props.code}/>, document.getElementById('root'))}>Ne</button>
        </div>
      </div>
    </div>
  );
}
export default Confirm;