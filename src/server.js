const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const connect = require('./config/db');
const path = require('path');
require('dotenv').config();

app.use(express.json());
app.set('view engine', 'ejs');



app.use(favicon(path.join(__dirname,'public','images','favicon.png')));

const articleController = require('./controller/article.controller');
const Article = require('./models/article.model');

app.use('/articles', articleController);
app.use(express.static(__dirname + '/public'));
app.use(path.join(__dirname + '/uploads'), express.static(__dirname + '/uploads'));

app.get('/blog', async (req, res) => {
    let highlighted = await Article.find({category: "Fantasy"}).sort({"publishedAt": -1}).limit(4).lean().exec();
    let matchPredictions = await Article.find({category: "Fantasy Prediction"}).sort({"publishedAt": -1}).limit(5).lean().exec();
    let latestPosts = await Article.find().sort({"publishedAt": -1}).limit(15).lean().exec();
    let digitalGames = await Article.find({category: "Games"}).sort({"publishedAt": -1}).limit(8).lean().exec();
    let popularTrends = await Article.find({category: "MPL Announcements"}).limit(3).lean().exec();
    res.render('blog', {highlighted, matchPredictions, latestPosts, digitalGames, popularTrends});
});

app.get('/', (req, res) => {
    res.render('blog');
});

app.get('/article_post', (req, res) => {
    res.render('article_post');
});


const port = process.env.PORT || 3000;

const start = () => {
    app.listen(port, async () => {
        await connect();

        console.log(`Listening on port ${port}`);
    });
}

module.exports = start;