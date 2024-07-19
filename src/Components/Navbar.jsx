import { AppBar ,Toolbar,Typography,Button} from '@mui/material'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({changeTheme}) => {
  return (
    <AppBar>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Redux-Todo
          </Typography>
          <Button variant="contained" sx={{backgroundColor:"red"}} size="small" onClick={changeTheme}
          endIcon={<DarkModeIcon/>}
          >
            Change Theme
          </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar