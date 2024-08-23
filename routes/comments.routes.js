const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentController = require('../controllers/commentController');

router.post('/', auth, commentController.createComment);
router.get('/', commentController.getComments);

module.exports = router;
