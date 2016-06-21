const mongo = require('mongoose')

let postSchema = mongo.Schema({
    userPost: String
    text: String,
    Tags: Array,
    likes: Array,
    commnets: [{body: String, user: String}],
    date: String
});

var Post = mongo.model('post', userSchema);

var mPost = {
    Post: Post
};

module.exports = mPost;
