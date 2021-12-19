const express = require("express");

const Page = require("../models/page.model");

const router = express.Router();

router.post("/", async(req, res) => {
    try {
        const page = await Page.create(req.body);

        return res.status(201).json({ page });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

// Find All
router.get("/:name", async(req, res) => {
    try {
        const page = await Page.findOne({ name: req.params.name }).lean().exec();

        if(!page){
            return res.status(404).render('notFound');
        }

        return res.render("pages/all", {
            data: page,
        });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

module.exports = router;