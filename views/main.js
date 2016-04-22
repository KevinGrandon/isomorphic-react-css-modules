import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from '../ExampleComponent';

var mountNode = document.getElementById('react-main-mount');
ReactDOM.render(<ExampleComponent initialData={window.initialData} />, mountNode);
