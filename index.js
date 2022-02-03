

var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var cors = require('cors');

var apiRoutes = require('./rutas/api.router');

require('dotenv').config({ path: '.env' });

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

// Rutas---------------------------------------------------------------------
app.use('/api', apiRoutes);

app.get('/', async (req, res) => {
    return res.status(200).send('Pruebas node js');
});
var port = process.env.PORT || 3000;

var server =app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
server.setTimeout(420000);
