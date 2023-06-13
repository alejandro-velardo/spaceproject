import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Timeline', 'Logout'];

function ResponsiveAppBar() {

  const { token } = useContext(Context)
  
  const goTo = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: '#ab2a3e',
      boxShadow: 'none',
      borderRadius: 1,
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { 
                xs: 'none', 
                md: 'flex' 
              },
              letterSpacing: '.1rem',
              color: '#ffffff',
              fontFamily: 'Monoton',
              fontSize: 25,
              textDecoration: 'none',
              marginTop: 0.2,
            }}
          >
            SpaceJam
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              letterSpacing: '.1rem',
              color: '#ffffff',
              fontFamily: 'Monoton',
              fontSize: 30,
              textDecoration: 'none',
            }}
          >
            SpaceJam
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => goTo(`${page}`)}
                sx={{ 
                  my: 2, 
                  marginTop: 3,
                  color: 'white', 
                  display: 'block', 
                  fontFamily: 'BenchNine', 
                  fontSize: 18, 
                  padding: 1,
                  paddingLeft: 2,
                  paddingRight: 2,
                  marginLeft: 3, 
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#ab2a3e'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {token 
            ? (
            <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </>)
            : (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ 
                  my: 2, 
                  marginTop: 3,
                  color: 'white', 
                  display: 'block', 
                  fontFamily: 'BenchNine', 
                  fontSize: 18, 
                  padding: 1,
                  paddingLeft: 2,
                  paddingRight: 2,
                  marginLeft: 3, 
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#ab2a3e'
                  }
                }}
                onClick={() => goTo(`/login`)}
              >
                Log In
              </Button>
              <Button
                sx={{ 
                  my: 2, 
                  marginTop: 3,
                  color: 'white', 
                  display: 'block', 
                  fontFamily: 'BenchNine', 
                  fontSize: 18, 
                  padding: 1,
                  paddingLeft: 2,
                  paddingRight: 2,
                  marginLeft: 3, 
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#ab2a3e'
                  }
                }}
                onClick={() => goTo(`/register`)}
              >
                Register
              </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;