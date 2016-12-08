var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

var port = 1701;

var app = express();
//	=	=	MIDDLEWARE	=	=	
app.use(bodyParser.json());

var corsOptions = {
	origin: 'http://localhost:' + port
}
app.use(cors(corsOptions));
app.use(session({secret:config.sessionSecret}));
app.use(express.static(__dirname + '/public'));



//	=	=	END POINTS	=	=	

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getUserFriends);


app.listen(port, function() {
	console.log("Listening on port: ", port);
})