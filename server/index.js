const express = require('express');
const app = express();
const {fetchUsers} = require('./server');

app.use('/', express.static('./build'));

app.get('/api/users', (req, res) => fetchUsers(req, res));

app.listen('8000', ()=> console.log('Server running on Port 8000'));
