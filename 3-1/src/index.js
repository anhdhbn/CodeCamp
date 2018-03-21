import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosApp from './Components/TodosApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodosApp />, document.getElementById('root'));
registerServiceWorker();
