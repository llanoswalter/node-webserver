const express =require('express');
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'walter',
        titulo: 'curso de node'
    });
});
app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'walter',
        titulo: 'curso de node'
    });
});
app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'walter',
        titulo: 'curso de node'
    });
});

app.listen(port, () =>{
    console.log(`app in http://localhost:${port}`);
});