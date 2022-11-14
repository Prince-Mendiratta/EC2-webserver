var express = require('express');
var bodyParser = require('body-parser')

var webhookTrigger = require('./routes/webhook');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/webhook', webhookTrigger);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server running on port ' + port);
});

