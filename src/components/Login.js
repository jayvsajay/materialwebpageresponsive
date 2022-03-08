import * as React from 'react';
import Box from '@mui/material/Box';
import '../App.css'
import { Grid ,TextField,Button,Paper} from '@mui/material';
export default function Login(){
return(
<div className='reg'>
<Box 
      sx={{
        width:"65%",
        height: "60%",
       marginLeft:"30%",
      padding:"2%"
      }}>
    <Grid md={6} sm={8} xs={10} >
    <Paper elevation={3} sx={{padding:"3%"}} >
    <h2>Login</h2>
<TextField
  id="outlined-uncontrolled"
  label="Email"
  sx={{margin:"30px"}}
/>
<TextField
  id="outlined-uncontrolled"
  label="Password"
  sx={{margin:"30px"}}
/>

<Button  sx={{ display:"block",marginLeft:"30%" ,marginBottom:"20%"}} variant="contained">Login</Button>
    </Paper>
    </Grid>
    </Box>
</div>)
}