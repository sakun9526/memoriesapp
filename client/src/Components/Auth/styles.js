import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  paper: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
  avatar: {
    margin: '10px',
    backgroundColor: 'secondary',
  },
  form: {
    width: '100%',
    marginTop: '10px',
  },

  googleButton: {
    marginBottom: '10px',
  },
}));