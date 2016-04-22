import React from 'react';
import ExampleComponent from './ExampleComponent';
import ReactDOMServer from 'react-dom/server';

var express = require('express');
var app = express();

app.use(express.static('views'));

app.get('/', function (req, res) {
    let initialData = {firstName: "Kevin", lastName: "Grandon"};
    let content = ReactDOMServer.renderToString(<ExampleComponent initialData={initialData} />);
    res.render('index.ejs', {reactOutput: content, initialData: JSON.stringify(initialData)});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
