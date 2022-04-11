import PostsModel from '../models/postsModel.js';
 

export const getPosts = async (req,res) => {
    try {
      const posts = await PostsModel.find();
      res.status(200).json(posts);
    } catch (error) {
        res.sendstatus(404).json({message: error.message});
    }
} 


export const createPosts = async (req,res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new PostsModel({ title, message, selectedFile, creator, tags })

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        console.log(error);
    }
    
}