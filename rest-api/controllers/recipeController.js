const { recipeModel, userModel } = require('../models');

function newPost(text, userId, recipeId) {
    /*
    return postModel.create({ text, userId, recipeId })
        .then(post => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { posts: post._id }, $addToSet: { recipe: recipeId } }),
                recipeModel.findByIdAndUpdate({ _id: recipeId }, { $push: { posts: post._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })*/
}
/*
function getLatestsRecipes(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    postModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('userId')
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(next);
}*/

function getRecipes(req, res, next) {
    
    recipeModel.find()
        .populate('userId')
        .then(recipes => res.json(recipes))
        .catch(next);
        
}

function createPost(req, res, next) {
    /*
    const { recipeId } = req.params;
    const { _id: userId } = req.user;
    const { postText } = req.body;

    newPost(postText, userId, recipeId)
        .then(([_, updatedRecipe]) => res.status(200).json(updatedRecipe))
        .catch(next);*/
}
function editPost(req, res, next) {
    /*
    const { postId } = req.params;
    const { postText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the post, the post will not be updated
    postModel.findOneAndUpdate({ _id: postId, userId }, { text: postText }, { new: true })
        .then(updatedPost => {
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);*/
}

function deletePost(req, res, next) {
    /*
    const { postId, recipeId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        postModel.findOneAndDelete({ _id: postId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
        recipeModel.findOneAndUpdate({ _id: recipeId }, { $pull: { posts: postId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);*/
}




function getRecipe(req, res, next) {
    const { recipeId } = req.params;
    recipeModel.findById(recipeId)
       /* .populate({
            path : 'posts',
            populate : {
              path : 'userId'
            }
          })*/
        .then(recipe => {
            res.status(200).json(recipe)
            
        })
        .catch(next);
        
}

function createRecipe(req, res, next) {
    
    const { title,imageUrl,description,prepTime,cookTime,ingredients} = req.body;
    const { _id: userId } = req.user;

    recipeModel.create({ title,imageUrl,description,prepTime,cookTime,ingredients, userId, subscribers: [] })
      .then(theme=>{
        userModel.findByIdAndUpdate({_id:userId},{$addToSet:{recipes:theme._id}},{ new: true })
        .then(updatedTheme =>
            { res.status(200).json(updatedTheme)
    
            })
      })
          
        .catch(next); 

}


function subscribe(req, res, next) {
    const recipeId = req.params.RecipeId;
    const { _id: userId } = req.user;
    recipeModel.findByIdAndUpdate({ _id: recipeId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedRecipe => {
            res.status(200).json(updatedRecipe)
        })
        .catch(next);
}
function deleteRecipe(req, res, next) {
    console.log(req);
    //  const { postId, recipeId } = req.params;
      
      const {  recipeId } = req.params;
      const { _id: userId } = req.user;
   
  
  
      Promise.all([
        //  postModel.findOneAndDelete({ _id: postId, userId }),
          userModel.findOneAndUpdate({ _id: userId }, { $pull: { recipes: recipeId } }),
          recipeModel.findByIdAndDelete({ _id: recipeId }),
      ])
          .then(([deletedOne, _, __]) => {
              if (deletedOne) {
                  res.status(200).json(deletedOne)
              } else {
                  res.status(401).json({ message: `Not allowed!` });
              }
          })
          .catch(next);
  }
  
/*
function like(req, res, next) {
    const { recipeId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    recipeModel.updateOne({ _id: recipeId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}
*/
module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    subscribe,
    deleteRecipe,
}

/*{
    getLatestsRecipes,
   getRecipes,
    createRecipe,
    getRecipe,
    deletePost,editPost,createPost,newPost,subscribe,
    like
}
*/