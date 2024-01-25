import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render is no longer supported in React 18. Use ReactDOM.creatRoot instead
//ReactDOM.render(<App />, document.getElementById('root'));
