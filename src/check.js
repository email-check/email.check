import './index.css';
import firebase from './firebase';
import ReactDOM from 'react-dom';
import Confirm from './confirm';

export function Check(ID, code) {
  var mail;
  mail = document.getElementById("email").value;
  return (
    firebase.database().ref("user/" + ID).update({
      email: mail,
    }),
    ReactDOM.render(<Confirm code={code}/>, document.getElementById('root'))
  );
}