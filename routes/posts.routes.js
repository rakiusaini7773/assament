const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postController = require('../controllers/postController');

router.post('/', auth, postController.createPost);
router.get('/', postController.getPosts);

module.exports = router;
