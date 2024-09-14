// /routes/posts.js
const express = require('express');
const router = express.Router();
const { Posts } = require('../models');  // Correct import

router.get('/', async (req, res) => {
    const listOfAllPosts = await Posts.findAll();
    res.json(listOfAllPosts);
});

router.post('/', async (req, res) => {
    const post = req.body;
    try {
        const newPost = await Posts.create(post);
        res.json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;