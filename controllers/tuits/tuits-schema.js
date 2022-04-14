import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number
    },
    handle: String,
    avatar: String,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});
export default schema;