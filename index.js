const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

// body-parser middleware
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests on port 4000');
});