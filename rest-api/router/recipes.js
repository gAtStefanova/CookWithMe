const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const {  postController,recipeController } = require('../controllers');

// middleware that is specific to this router

router.get('/', recipeController.getRecipes);
router.post('/', auth(), recipeController.createRecipe);

router.get('/detail/:recipeId', recipeController.getRecipe);
//router.put('/detail/:recipeId', auth(), recipeController.subscribe);

router.delete('/detail/delete/:recipeId', recipeController.deleteRecipe);
router.put('/detail/edit', recipeController.editRecipe);

//router.post('/:recipeId', auth(), postController.createPost);

// router.get('/my-trips/:id/reservations', auth(), recipeController.getReservations);

module.exports = router

