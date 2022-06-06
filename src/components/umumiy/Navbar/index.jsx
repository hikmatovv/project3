import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Grid from '@mui/material/Grid'
import { styled, alpha } from '@mui/material/styles'
import Dashboard1 from "./Dashboard/one";
import Dashboard2 from "./Dashboard/two";
import Dashboard3 from "./Dashboard/three";
import Dashboard4 from "./Dashboard/four";
import Icon from "./Dashboard/icon";
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import logo from '../../../assets/images.png'


const pages = ["Products", "Pricing", "Blog"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 ;

  return (
    <AppBar
      position="static"
      sx={{
        background: "none",
        boxShadow: "none",
        width: "100%",
        zIndex: "4",
        backgroundColor: "white",
        boxShadow:'15px 27px 15px -18px #E9E9E9'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <img src={logo} width='40px' height='100%'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
            
              color: "black",
          
              fontSize: "14px",
              fontStyle: "normal",
              lineHeight: "140%",
              textDecoration: "none",
         
            }}
          >
            mangcoding Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"

            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "black",
              textDecoration: "none",

              fontSize: "14px",
              fontStyle: "normal",
              lineHeight: "140%",
            }}
          >
            mangcodin Store

          </Typography>
       

          <Grid sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Grid sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row' }}>
              <Dashboard1 />
              <Dashboard2 />
              <Dashboard3 />
              <Dashboard4 />

            </Grid>
            <Grid >
              <Icon />
            </Grid>
            <Grid sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Grid >
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: { xs: 'none', sm: 'flex', md: 'flex' }, alignItems: 'center', width: '100%', border: '1px solid gray', borderRadius: '13px' }}
                >

                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search "
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}

                </Paper>
              </Grid>
            </Grid>

            

          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
