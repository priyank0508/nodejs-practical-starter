const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const cors = require('cors');
const { connectDatabase } = require('./src/config/dbConfig');
const { globalErrorHandler } = require('./src/exception/errorHandler');
const path = require('path');
require('dotenv').config()

const app = express();
const port = 4000

app.use(cors({ origin: '*' }))
app.use(bodyParser.json());
app.use('/src/uploads', express.static(path.resolve(__dirname + '/src/uploads')));

app.use('/api', routes)
app.use(globalErrorHandler)

app.listen(port, function (error) {
    if(error) console.log('Error in server setup', error);
    console.log(`App listening on ${port}`)
    connectDatabase()
})