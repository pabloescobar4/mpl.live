const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const connect = require('./config/db');
const path = require('path');
require('dotenv').config();

app.use(express.json());
app.set('view engine', 'ejs');


const pageController = require('./controller/page.controller');
const articleController = require('./controller/article.controller');
const news = require("./controller/newscrud")
const Article = require('./models/article.model');


app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));
app.use(express.static(__dirname + '/public'));
app.use(path.join(__dirname + '/uploads'), express.static(__dirname + '/uploads'));
app.use('/dropdown', pageController);
app.use('/articles', articleController);
app.use("/news", news);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/esport', (req, res) => {
    res.render('esport');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/faq', (req, res) => {
    res.render('faq');
});

app.get('/help', (req, res) => {
    res.render('help');
});

app.get('/news', (req, res) => {
    res.render('new');
});

app.get('/article_post', (req, res) => {
    res.render('article_post');
});

app.get('/blog', async (req, res) => {
    let highlighted = await Article.find({ category: "Fantasy" }).sort({ "publishedAt": -1 }).limit(4).lean().exec();
    let matchPredictions = await Article.find({ category: "Fantasy Prediction" }).sort({ "publishedAt": -1 }).limit(5).lean().exec();
    let latestPosts = await Article.find().sort({ "publishedAt": -1 }).limit(15).lean().exec();
    let digitalGames = await Article.find({ category: "Games" }).sort({ "publishedAt": -1 }).limit(8).lean().exec();
    let popularTrends = await Article.find({ category: "MPL Announcements" }).limit(3).lean().exec();
    res.render('blog', { highlighted, matchPredictions, latestPosts, digitalGames, popularTrends });
});


app.use(function (req, res, next) {
    res.status(404).render('notFound');
});


const port = process.env.PORT || 3000;

const start = () => {
    app.listen(port, async () => {
        await connect();

        console.log(`Listening on port ${port}`);
    });
}

module.exports = start;