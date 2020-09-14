const {fakeUsers} = require('./seed');

const fetchUsers = (req, res) => res.send({users: fakeUsers});

module.exports = {fetchUsers};
