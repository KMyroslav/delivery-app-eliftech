const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app