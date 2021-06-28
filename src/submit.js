import './index.css';
import firebase from './firebase';
import ReactDOM from 'react-dom';
import End from './end';

export function Submit(ID) {
  return (
    firebase.database().ref("user/" + ID).update({
      status: "done"
    }),
    ReactDOM.render(<End/>, document.getElementById('root'))
  );
}