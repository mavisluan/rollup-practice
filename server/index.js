const express = require('express');
const app = express();
// const {fetchUsers} = require('./server');
// const api = require('../dist/index.js');
const api = require('../node_modules/create-module/dist/index');

app.use('/', express.static('./build'));

// app.get('/api/users', (req, res) => fetchUsers(req, res));
app.get('/api/users', (req, res) => api.fetchUsers(req, res));

app.listen('8000', ()=> console.log('Server running on Port 8000'));
