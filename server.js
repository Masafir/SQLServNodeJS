var sql = require('mysql');
var url = require('url');
var http = require('http');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'aze',
        database: 'barbarians'
    }
);

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("connected as  : ",connection.threadId);
});

const app = http.createServer((req,rep) => {
    console.log('votre requete : ', req);
    rep.writeHead(200, {"Content-Type": "text/html"});
});

app.listen(3000);
