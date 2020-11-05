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

app.get('/sales', (req, res) => {
    res.render('sales')
});

app.get('/img', (req, res) => {
    res.render('img')
});



app.listen(process.env.PORT || 3000)