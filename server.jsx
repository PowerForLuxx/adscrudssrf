import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import bodyParser from 'body-parser';
import path from 'path';

require('ignore-styles');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(express.static(path.resolve(__dirname, 'public')));

server.get('*', (req, res) => {
    const appString = ReactDOMServer.renderToString(<App />);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My App</title>
        </head>
        <body>
            <div id="root">${appString}</div>
            <script src="/client.jsx" type="module"></script>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
