import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';

import memories from './Images/memories.png'
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './Styles';
import {getPosts} from './Actions/posts';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId, dispatch])

  return (
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Memories App</Typography>
          <img className={classes.image} src={memories} alt='memories' height='60'/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing={3}>

              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            
            </Grid>
          </Container>
        </Grow>
      </Container>      
  );
}

export default App;
