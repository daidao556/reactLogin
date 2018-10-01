const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json() );  
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(cors());

const knex = require('knex')({
    client:'mysql',
    connection: {
        host:'127.0.0.1',
        user:'nghia',
        password:'0123456789tenandeleven',
        database:'account_info'
    }
});



checkIsAvailableAccount = function(data) {
    return knex('accounts').where('username',data.username).where('email', data.email);
},


insertAccountIntoDatabase = function(data) {
    return knex('accounts').insert({username: data.username, password: data.password, 
    email: data.email, salt: data.salt});
}

const server = app.listen(port, ()=> {
    var host = server.address().address 
    console.log('Listening on port at' + host + " with " + port);
});


app.get('/', function (req, res) {
    res.send('Hello World');
 })
app.post('/create_account', cors(), async (req, res) => {
    let data = req.body;
    try {
        let account = await checkIsAvailableAccount(data);
        console.log(data);
        if(account.length == 0) {
            try {
                insertAccountIntoDatabase(data)
                .then(function(data) {
                    res.send("Create account success");
                })
                .catch(function(err) {
                    throw err;
                });
                
            }
            catch(err) {
                //res.send(err);
                throw err;
            }
        }
        else {
            res.send("Username or email is not available");
        }
    }
    catch (err) {
        //res.send(err);
        throw err;
    }
});