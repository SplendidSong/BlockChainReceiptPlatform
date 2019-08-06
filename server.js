const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.post('/calculate', bodyParser.json() , function(req, res) {
	var result = 0

	switch(req.body.operator) {
		case '+' :
			result = parseFloat(req.body.num1) + parseFloat(req.body.num2)
			break
		case '-' :
			result = parseFloat(req.body.num1) - parseFloat(req.body.num2)
			break
		case 'x' :
			result = parseFloat(req.body.num1) * parseFloat(req.body.num2)
			break
		case '/' :
			result = parseFloat(req.body.num1) / parseFloat(req.body.num2)
			break
	}
	
	res.send(result)

})


app.listen(3000)