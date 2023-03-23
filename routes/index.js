import express from 'express';
import { movieController, signupController, loginController, mailer } from '../controllers';
const router  = express.Router();

// Auth
router.post('/signup', signupController.signup);
router.post('/login', loginController.login);
router.post('/mail', mailer);

router.post('/addmovies', movieController.addMovies);
router.get('/getMovies', movieController.getMovies);
router.get('/getSingleMovie/:id', movieController.getSingleMovie);

export {router}