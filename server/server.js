const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = require('http').createServer(app);

const {getAllUsersAsync} = require('./dbFunctions');

const wrap = fn => (...args) => fn(...args).catch(args[2])

app.use('/', express.static('./build'));
app.get('/api/users', wrap(getAllUsersAsync));

const io = socketIO(server, { path: '/socket.io' , transports: ['websocket', 'polling'] });
io.on('connection', (socket) => console.log('User connected', socket.id));

module.exports = { server }