import './index.css';
import firebase from './firebase';
import ReactDOM from 'react-dom';
import Panel2 from './panel2';
import { sha256 } from 'js-sha256';

const Import = () => { 
  let fileReader;
  var a, b, c;
  var array = [];
  var array2 = [];
  var code, company, name, surname, tabel;
  a = 0;
  const handleFileRead = () => {
    const content = fileReader.result;
    for(var i = 0; i < content.length; i++){
      if(content.charAt(i) === '"'){
        a = a + 1;
        if(a % 4 === 3){
          b = i;
        }
        if(a % 4 === 0){
          c = i;
          array.push(content.slice(b + 1, c));
        }
      }
    }
    a = 0;
    array.map(user => {
        a = a + 1;
        if(a % 5 === 1){
          code = sha256(user);
        }
        if(a % 5 === 2){
          company = user;
        }
        if(a % 5 === 3){
          name = user;
        }
        if(a % 5 === 4){
          surname = user;
        }
        if(a % 5 === 0){
          tabel = user
          array2.push({
            code: code,
            company: company,
            name: name,
            surname: surname,
            tab: tabel
          })
        }
        return true;
    })
    array2.map(user => {
      return(
        firebase.database().ref("user").orderByChild("code").equalTo(user.code).once("value", (snapshot) =>{
          console.log(snapshot.val());
          if(snapshot.val() === null){
            firebase.database().ref("user").push().set({
              name: user.name,
              surname: user.surname,
              email: "",
              status: "pending",
              company: user.company,
              tab: user.tab,
              code: user.code
            })
          }
        })
      );
    })
  }

  const handleFile = (file) =>{
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  return(
    <div className="button-center">
      <input type="file" name="file" id="file" className="file-input" multiple={false} accept=".json" onChange={e => handleFile(e.target.files[0])}/>
      <button className="menubutton" onClick={() => ReactDOM.render(<Panel2/>, document.getElementById('root'))}>Grįžti atgal</button>
      <div style={{opacity: "0", position: "absolute", top: "100vh"}} id="table-r"/>
    </div>
  );
}
export default Import;