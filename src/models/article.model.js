const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    urlToImage: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: false},
    publishedAt: {type: Date, required: true},
    category: [{type: String, required: true}],
}, {
    versionKey: false,
    timestamps: true,
});

const Article = model('article', articleSchema);


module.exports = Article;