import mongoose from 'mongoose';
import PostsModel from '../models/postsModel.js';
 

export const getPosts = async (req,res) => {
    try {
      const posts = await PostsModel.find();
      res.status(200).json(posts);
    } catch (error) {
        res.sendstatus(404).json({message: error.message});
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
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

export const updatePost = async (req,res) => {
    const {id} = req.params;
    const { creator, title, message, tags, selectedFile } = req.body;

    //check _id is a mongoose id
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id }; 
    
    await PostsModel.findByIdAndUpdate(id, updatedPost, {new: true});
    res.json(updatedPost);

}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostsModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostsModel.findById(id);

    const updatedPost = await PostsModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
