// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';

//Components 
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Style 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Render App
ReactDOM.render(<App />, document.getElementById('root'));

//Service worker helps 
registerServiceWorker();
