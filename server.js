const express = require('express');
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', { articles: articles });
});

app.listen(5000);
console.log('Server is running on port 5000.');