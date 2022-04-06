import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import memories from './Images/memories.png'

import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';

import useStyles from './Styles';

function App() {

  const classes = useStyles();

  return (
    <div>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Memories App</Typography>
          <img className={classes.image} src={memories} alt='memories' height='60'/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing={3}>

              <Grid item xs={12} sm={7}>
                <Posts/>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
            
            </Grid>
          </Container>
        </Grow>

      </Container>
      
    </div>
  );
}

export default App;
