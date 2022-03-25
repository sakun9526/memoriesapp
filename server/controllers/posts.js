import PostsModel from '../models/postsModel.js';
 

export const getPosts = async (req,res) => {
    try {
      const posts = await PostsModel.find();
      res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
} 

export const createPosts = async (req,res) => {
    const Post = req.body;

    const newPost = new PostsModel(Post);

    try {
        await newPost.save();
        res.send(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
