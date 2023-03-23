import mongoose from 'mongoose';
const { Schema }  = mongoose;

const movieSchema = new Schema({
    title:{
        type: String,
        required : false
    },
    year:{
        type: Number,
        required : false
    },
    runtime:{
        type: String,
        required : false
    },
    images:{
        type: String,
        required : false
    },
    rating:{
        type: Number,
        required : false
    },
    director:{
        type: String,
        required : false
    },
    writer:{
        type: String,
        required : false
    },
    stars:{
        type: String,
        required : false
    },
    language:{
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    videoLink:{
        type: String,
        required: false
    },
    descriptions:{
        type: String,
        required: false
    }
});

const Movie = mongoose.model('movie', movieSchema, 'movies');

export default Movie;
