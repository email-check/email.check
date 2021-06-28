import './index.css';
import firebase from './firebase';
import ReactDOM from 'react-dom';
import Panel2 from './panel2';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Export() {
  var Data, tbl;
  tbl = "<tr><th>Vardas</th><th>Pavardė</th><th>Tabelis</th><th>El.paštas</th></tr>";
  firebase.database().ref("user").orderByChild("status").equalTo("done").once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      Data = childSnapshot.val();
      tbl = tbl + "<tr><td>" + Data.name + "</td><td>" + Data.surname + "</td><td>" + Data.tab + "</td><td>" + Data.email + "</td></tr>";
    })
    tbl = "<table id='table-to-xls'>" + tbl + "</table>";
    document.getElementById("table-r").innerHTML = tbl;
    
  })
  return(
    <div className="button-center">
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="menubutton"
        table="table-to-xls"
        filename="Email_List"
        sheet="tablexls"
        buttonText="Exportuoti į Excel"
      />
      <button className="menubutton" onClick={() => ReactDOM.render(<Panel2/>, document.getElementById('root'))}>Grįžti atgal</button>
      <div style={{opacity: "0", position: "absolute", top: "100vh"}} id="table-r"/>
    </div>
  );
}
export default Export;