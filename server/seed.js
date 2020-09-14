const {v4: uuidv4} = require('uuid')

const fakeUsers = [
  {userId: uuidv4(), name: 'user1', password: 'user',   isAdmin: false},
  {userId: uuidv4(), name: 'user2', password: 'user', isAdmin: false},
  {userId: uuidv4(), name: 'user3', password: 'user',   isAdmin: false},
  {userId: uuidv4(), name: 'user4', password: 'user',   isAdmin: false},
  {userId: uuidv4(), name: 'user5', password: 'user', isAdmin: false},
  {userId: uuidv4(), name: 'user6', password: 'user',   isAdmin: false},
  {userId: uuidv4(), name: 'admin1', password: 'admin',   isAdmin: true},
  {userId: uuidv4(), name: 'admin2', password: 'admin', isAdmin: true},
  {userId: uuidv4(), name: 'admin3', password: 'admin',   isAdmin: true},
  {userId: uuidv4(), name: 'admin4', password: 'admin',   isAdmin: true},
  {userId: uuidv4(), name: 'admin5', password: 'admin', isAdmin: true},
  {userId: uuidv4(), name: 'admin6', password: 'admin',   isAdmin: true},
]

module.exports = {fakeUsers}
