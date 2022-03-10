import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Center from './Center';

export default function Dashboard() {
  
  return (
    <div className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        <Grid container sx={{padding:"1%"}}>
        <Grid item md={3} sm={6} xs={12} sx={{padding:"1%"}}>
           
            <Paper elevation={3} sx={{height:"100%"}}>
                <h2 className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">My Account</h2>
            <Avatar
                alt="profile pic"
                src="./logo192.png"
                sx={{ width:"150px",height:"150px",margin:"auto"}}
                />
                <br/>
                <Button className="text-left">General</Button>
                <br/>
                <Button className="text-left">Edit Profile</Button>
                <br/>
                <Button className="w-50 justify-start" href="/changepassword">Change Password</Button>
                <br/>
                <Button className="w-50 justify-start">Settings</Button>
            </Paper>
        </Grid>
        <Grid item md={6} sm={6} xs={12} sx={{padding:"1%"}}> 
        <Paper elevation={3}>
           <Center/>
            </Paper>
            </Grid>
            <Grid item md={3} sm={6} xs={12} sx={{padding:"1%"}}>
            <Paper elevation={3} sx={{height:"100%"}}>
            <h2 className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">Chat History</h2>
            <div className='flex'>
            <Avatar sx={{marginLeft:"2%"}}/> 
            <h4 className='px-5'>jay</h4>
            </div>
           
            <br/>
            <div className='flex'>
            <Avatar sx={{marginLeft:"2%"}}/> 
            <h4 className='px-5'>Mahesh</h4>
            </div>
            <br/>
            <Avatar sx={{marginLeft:"2%"}}/>
            <br/>
            <Avatar sx={{marginLeft:"2%"}}/>
            <br/>
            <img className="float-left w-15 h-12" src="./paella.jpg"/>
          <p className='justify-start'>Maybe we can live without libraries, people like you and me.hey dskng csmjnerkj vjnrejn
          vfvn.jvne vekjnvtean ...</p>
            </Paper>
        </Grid>            </Grid>
    </div>
  );
}
