import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64';

import useStyles from './Styles';
import { createPost, updatePost } from '../../Actions/posts';

function Form({currentId, setCurrentId}) {

  const [postData, setPostData] = useState({creator: '', title: '', message:'', tags:'', selectedFile:''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null ));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => {
    if(post) setPostData(post);
  }, [post])
  

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(currentId === 0){
      dispatch(createPost(postData));
      clear();

    } else {
      dispatch(updatePost(currentId,postData));
      clear();
    }    
  };

  
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})}/>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})}/>
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}/>
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value.split(',')})}/>

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
        </div>

        <Button className={classes.buttonSubmit} color='primary' variant="contained" size='large' type='submit' fullWidth>Submit Memory</Button>  
        <Button sx={{mt:1.5}} color='secondary' variant="outlined" size='small' onClick={clear} fullWidth>Clear</Button>  
      
      </form>

    </Paper>
  )
}

export default Form