var express = require('express');
var bodyParser = require('body-parser');
var phones = require('../database-mongo');
var db = require('../database-mongo/index.js');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  phones.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);

    }
  });
});
// POST request: recive the data frome clinet and save them on the data base.
app.post('/items' , function (req,res){
	console.log('req.body :',req.body);
	var name = req.body.phones.name;
	var phoneNumber = req.body.phones.phoneNumber;
	db.save({name:name, phoneNumber:phoneNumber} , function(test){
		res.send(req.body.phones)
	})
})

var port = process.env.PORT || 3000 ;
app.listen(port, function() {
 console.log(`listening on port ${port}`);
});
