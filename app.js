const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials')

const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs');
app
.use((req, res, next) => {
    console.log(req.path);
    next();
})
.get('/', (req, res) => {
    res.send('hello world.');
}).get('/json', (req, res) => {
    res.send({a:1})
}).get('/index', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'Index Page',
        year: new Date().getFullYear()
    })
})
.use(express.static(__dirname + '/public'))

.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
//testing