import * as React from 'react';
import Box from '@mui/material/Box';
import '../App.css'
import { Grid ,TextField,Button,Paper} from '@mui/material';
export default function Signup(){
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
    <Paper elevation={3} sx={{padding:"7%"}}>
    <h2>Registration</h2>
    <TextField
  id="outlined-name"
  label="UserName"
  sx={{margin:"20px"}}
//   value={name}
//   onChange={handleChange}
/>
<TextField
  id="outlined-uncontrolled"
  label="Email"
  sx={{margin:"20px"}}
/>
<TextField
  id="outlined-uncontrolled"
  label="Password"
  sx={{margin:"20px"}}
/>
<TextField
  id="outlined-uncontrolled"
  label="Confirm Password"
  sx={{margin:"20px"}}
/>
<Button  sx={{display:"block",marginLeft:"30%",marginBottom:"10%"}} variant="contained">Register</Button>
    </Paper>
    </Grid>
    </Box>
</div>)
}