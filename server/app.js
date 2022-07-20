const path = require('path');
const logger = require('morgan')
const express = require('express')

const cors = require('cors')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')));

const {shopsRouter} = require('./routes')

app.use("/api/shops", shopsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app