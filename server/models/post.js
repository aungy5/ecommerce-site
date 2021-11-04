const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        postBody: {
            type: String,
            minlength: 1,
            maxlength: 300,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        }
    }
);

const Post = model('Post', postSchema);

module.exports = Post;