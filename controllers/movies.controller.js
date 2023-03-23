import Joi from 'joi';
import { Movie } from '../models';

const movieController = {

     async addMovies(req, res, next){
        try {
          // validation
         const movieSchema = Joi.object({
         title: Joi.string().min(3).max(50),
         year: Joi.string().min(3).max(50),
         runtime: Joi.string().min(3).max(50),
         images: Joi.string().min(3).max(50),
         rating: Joi.string().min(3).max(50),
         director: Joi.string().min(3).max(50),
         writer: Joi.string().min(3).max(50),
         stars: Joi.string().min(3).max(50),
         language: Joi.string().min(3).max(50),
         country: Joi.string().min(3).max(50),
         videoLink: Joi.string().min(3).max(50),
         descriptions: Joi.string().min(3).max(50)
         })
         const {err, value}= movieSchema.validate(req.body);
         if(err){
           throw Error(err);
         }
        const result = await Movie.create(value)
        
        res.json({message: "Movie Added Successfully", data:  result});

        } catch (error) {
          res.json({messages: error.message})
        }
     },

     getMovies(req, res, next){
      try {
         Movie.find((err, docs)=>{
            if(err){
               throw Error(err)
            }
            res.json({message:'movie fetch successfully' ,data: docs})
         });

      } catch (error) {
         res.json({error: error.message});
      }
     },

    async getSingleMovie(req, res, next){
       try {
         const result = await Movie.findById(req.params.id);
         res.json({message: 'single movie fetch successfully', data: result});
       } catch (error) {
         res.json({error: error.message})
       }
    }
}

export default movieController;