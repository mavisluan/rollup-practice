const AWS = require('aws-sdk')
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
    // region: "us-east-1"
})

const tableName = 'cpe-chat-test'

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})
const getAllUsersAsync = async (req, res) => {
  try {
    const data = await docClient.get({
      TableName: tableName,
      Key: {chatKey: 'users'},
    }).promise()
    const {users} = data.Item
    res.send({users})
  } catch (error) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(error, null, 2))  
  }
}


module.exports = { getAllUsersAsync }