import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/api/data', (req, res) => {
    const data = [100, 50, 300, 40, 350, 250]; // assuming this is coming from the database
    res.json(data);
});


app.get('/example', (req, res) => {
    res.render('example');
});

app.listen(3000);


