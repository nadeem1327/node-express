//const express = require('express'); // old method before - ES6 

import express from 'express'; // type: module is used in ES6-JS
import bodyParser from 'body-parser';
import useRoutes from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', useRoutes);

//app.get( path, callback )
app.get('/', (_req, res) => res.send('Hello from index.js'));


//app.listen([port[, host[, backlog]]][, callback])
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));