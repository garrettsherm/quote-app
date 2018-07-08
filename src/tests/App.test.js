import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';


// Basic test created by create-react-app
// Makes sure app renders without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
