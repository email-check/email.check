import './index.css';
import Import from './import';
import Export from './export';
import ReactDOM from 'react-dom';

function Panel2() {
  return (
    <div className="second">
      <div className="page-panel">
        <div className="small-container">
          <div className="content">
            <button className="menubutton" onClick={() => ReactDOM.render(<Import/>, document.getElementById('root'))}>Importuoti</button>
            <button className="menubutton" onClick={() => ReactDOM.render(<Export/>, document.getElementById('root'))}>Exportuoti</button>
            <div id="export-table"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Panel2;