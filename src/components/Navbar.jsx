import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import { useState } from 'react'

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white"
  display: "none", 
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignContent: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }

}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block"}}}>MUI App</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none"}}}/>
        <Search>
          <InputBase placeholder='Search...'/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar 
              sx= {{ width: 30, height: 30 }}
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              onClick={ e => setAnchorEl(e.currentTarget) }
            />
        </Icons>
        <UserBox onClick={ e => setAnchorEl(e.currentTarget) }>
          <Avatar 
              sx= {{ width: 30, height: 30 }}
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
          <Typography variant='span'>John Smith</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        // aria-labelledby="demo-positioned-button"
        anchorEl={ anchorEl }
        open={ open }
        onClose={ e => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>      
    </AppBar>
  )
}

export default Navbar