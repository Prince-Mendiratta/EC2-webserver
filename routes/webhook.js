var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {
    console.log('Got a GET request');
    res.send('acknowledged.');
});

router.post('/', (req, res) => {
    console.log('Got a POST request');
    res.send('post acknowledged.')
})


module.exports = router;
