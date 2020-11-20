const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/info', (req, res) => {
    res.render('info')
});

app.get('/requests', (req, res) => {
    res.render('requests')
});

app.get('/js', (req, res) => {
    res.render('js')
});

app.get('/img', (req, res) => {
    res.render('img')
});



app.listen(process.env.PORT || 3000)