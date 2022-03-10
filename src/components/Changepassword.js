import { Button, Paper, Stack,TextField } from '@mui/material'
import React from 'react'

export default function Changepassword() {
  return (
    <div >
      <div>
      <Stack spacing={2} component="form"
     className="mt-10 ml-96 w-96 bg-gradient-to-t from-slate-500 to-orange-400">
        <Paper elevation={4}>
          <h2 className='text-center'>Changepassword</h2>
      <TextField
  helperText="Please enter old password"
  label="Old Password"
/>
<TextField
  helperText="Please enter new password "
  label="New Password"
/>
<TextField
  helperText="Please enter confirm password "
  label="Confirm Password"
/>
<br/>
<Button variant='contained' sx={{marginBottom:"5%",marginTop:"5%"}}>Update</Button>
</Paper>
      </Stack>
      </div>
    </div>
  )
}
