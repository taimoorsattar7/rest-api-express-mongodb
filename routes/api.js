const express = require('express');
const router = express.Router();

router.get('/team', function(req, res){
	console.log('GET request');

	res.send({type: 'GET'});
});

router.post('/team', function(req, res){
	console.log(req.body);


	res.send({
        type: 'POST',
        name: req.body.name,
        ranking: req.body.ranking,
        win: req.body.win,
        lost: req.body.lost,
        accuracy: req.body.accuracy
    });
});

router.put('/team/:id', function(req, res){
	console.log('update request');
	res.send({type: 'PUT'});
});

router.delete('/team/:id', function(req, res){
	console.log('delete request');
	res.send({type: 'DELETE'});
});


module.exports = router;