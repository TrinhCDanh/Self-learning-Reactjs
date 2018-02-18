import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StudyFrm from './components/StudyFrm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StudyFrm />, document.getElementById('root'));
registerServiceWorker();
