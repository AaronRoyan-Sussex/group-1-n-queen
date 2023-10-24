import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import "./Homepage.css";
import template from '../src/assets/queenLogoNew.png';
import groupNumber from '../src/assets/groupNumber.png';
import background from '../src/assets/homeBackgroundNew.jpg';
import App from './App';
import React, { useRef } from 'react';

function Homepage() {
  const handleClick = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  return (
    <div>
      <div className="backgdImg" style={{ backgroundImage: `url(${background})`}} width="500" height="500">
        <div className="container-fluid homepageArea">
          <img src={groupNumber} className="imgGroupNumber" width="150" height="70"/>
            <div class="clsQueen">
                <img src={template} onClick={handleClick} alt="Queen" width="200" height="300"/>
            </div>
        </div>
      </div>
      <div className="startMsg"> Please click on the Queen to Start </div>
    </div>
  );
}

//<div className="txtTitle"> Welcome to N-Queen Problem Solution </div>
//<div className="txtStart"> Please click on the Queen to Start </div>

export default Homepage;
