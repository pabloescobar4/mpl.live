// app.get('/news', (req, res) => {
//     res.render('new.ejs');
// });
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const newsmodel= require('../models/article.model');
const upload = require('../middlewares/upload');

//query avaliable: latest, category, limit
router.get('/', async (req, res) => {

    // const latest = req.query.latest || false;
    // const category = req.query.category;
    // const limit = +req.query.limit || 25;
    let news = await newsmodel.find();
    res.render("new",{news});

});
router.get('/:id', async (req, res) => {
    // const latest = req.query.latest || false;
    // const category = req.query.category;
    // const limit = +req.query.limit || 25;

    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(404).render('notFound');
    }

    let news = await newsmodel.find({_id:req.params.id});
    if(!news || news.length === 0){
        return res.status(404).render('notFound');
    }
    res.render("new", {news})
});

//upload.single('urlToImage')
router.post('/', async(req, res) => { 

    try{
        const news = await newsmodel.create(req.body);

        return res.status(201).send(news);

    } catch(err){
       return res.status(500).send({messagee: err.message, status: 'failed'});
    }

});


module.exports = router;