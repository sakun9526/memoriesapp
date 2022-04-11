import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64';

import useStyles from './Styles';
import { createPost } from '../../Actions/posts';

function Form() {

  const classes = useStyles();
  const [postData, setPostData] = useState({creator: '', title: '', message:'', tags:'', selectedFile:''});
  const dispatch = useDispatch();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createPost(postData));
  }

  const clear = () => {
    console.log('clear btn clicked');
  }
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a memory</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})}/>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})}/>
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}/>
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value})}/>

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