const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment({
      content: req.body.content,
      post: req.body.post_id,
      author: req.user.id,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.query.post_id }).populate('author', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};


