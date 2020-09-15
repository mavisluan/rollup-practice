const {fakeUsers} = require('./seed');

const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = require('http').createServer(app);

app.use('/', express.static('./build'));
app.get('/api/users', (req, res) => res.send({users: fakeUsers}));

const io = socketIO(server, { path: '/socket.io' , transports: ['websocket', 'polling'] });
io.on('connection', (socket) => console.log('User connected', socket.id));

module.exports = { server }