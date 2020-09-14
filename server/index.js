const express = require('express');
const app = express();
const socketIO = require('socket.io');

const {fetchUsers} = require('./server');
app.use('/', express.static('./build'));
app.set('port', 8000);

app.get('/api/users', (req, res) => fetchUsers(req, res));
const server = require('http').createServer(app);

const io = socketIO(server);
io.on('connection', (socket) => console.log('User connected', socket.id));

server.listen(8000, () => console.log('Server is running on Port 8000'));