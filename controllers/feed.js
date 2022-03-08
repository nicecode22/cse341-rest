const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: '1',
                title: 'First Post', 
                content: 'This is the first post!', 
                imageUrl: 'images/depre.jpg',
                creator: {
                    name: 'Mell'
                },
                createdAt: new Date()
            }
        ]
    });
};

exports.postPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({message: 'Validation failed', errors: errors.array()});
    }
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
        title: title, 
        content: content,
        imageUrl: 'images/depre.jpg',
        creator: { name: 'Mell'}
    });
    post.save().then(result => {
        res.status(201).json({ //201 es para decir que se creo el recurso exitosamente
            message: 'Post created!',
            post: result
        });
    })
    .catch(err => console.log(err));
};