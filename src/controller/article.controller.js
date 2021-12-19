const express = require('express');
const router = express.Router();
const Article = require('../models/article.model');
const upload = require('../middlewares/upload');

// query avaliable: latest, category, limit
router.get('/', async (req, res) => {

    const latest = req.query.latest || false;
    const category = req.query.category;
    const limit = +req.query.limit || 25;


    try{

        let articles;

        if(latest && category){
            articles = await Article.find({category}).sort({"publishedAt": -1}).limit(limit).lean().exec();
        }else if(latest){
            articles = await Article.find().sort({"publishedAt": -1}).limit(limit).lean().exec();
        }else if(category){
            articles = await Article.find({category}).limit(limit).lean().exec();
        }else {
            articles = await Article.find({}).lean().exec();
        }

        return res.status(200).send(articles);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});


router.post('/', upload.single('urlToImage'), async(req, res) => { 

    try{
        const article = await Article.create({
            urlToImage: req.file.path,
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            publishedAt: req.body.publishedAt,
            category: req.body.category,
        });

        return res.status(201).send(article);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});


router.get('/search', upload.single('urlToImage'), async(req, res) => { 

    const query = req.query.query;
    const regex = new RegExp(`.*${query}.*`);

    try{
        const articles = await Article.find({
            $or: [
                { title: { $regex: regex, $options: "i" } },
                { content: { $regex: regex, $options: "i" } },
                { description: { $regex: regex, $options: "i" } },
                { category: { $regex: regex, $options: "i" } },
              ],
        }).limit(6).lean().exec();
        return res.status(201).send(articles);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});


module.exports = router;