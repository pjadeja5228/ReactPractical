
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TextField, Box, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, InputAdornment } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  SetDarkMode, UserLogin } from '../store/slice';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import Dashboard from './Dashbord';
import Project from './Project';


const HomePage = () => {
    return (
        <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{
              flexGrow: 1,
              overflowY: 'auto',
              marginTop: "35px",
            }}>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="9px"
                bgcolor={'#f5f5f5'}
                boxShadow={3}
                // width="100%"
                // height='100%'
                padding={'10px'}
              >
                <Routes>
                  <Route path="/estimation" element={<>estimation</>} />
                  <Route path="/project" element={<Project/>} />
                  <Route path="/*" element={<Dashboard />} />
                </Routes>
              </Box>
            </main>
          </div>
        </div>
        </Router>
    )
}


const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar title='LOGO'>
      </Toolbar>
      <div style={{ display: "flex", justifyContent: "space-between", flexFlow:"column",height:"100%" }}>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} selected={location.pathname === '/dashboard'}  to="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
                <i className="icon-dashboard"></i>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button component={Link} selected={location.pathname === '/project'} to="/project">
              <ListItemIcon>
                {/* <AssignmentIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Project" />
            </ListItem>

            <ListItem button component={Link} selected={location.pathname === '/estimation'} to="/estimation">
              <ListItemIcon>
                {/* <AssessmentIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Estimation" />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Button
            variant="contained"
            style={{backgroundColor:"none", border:"none"}}
            fullWidth
            onClick={() => { dispatch(UserLogin()); }}
          >
            <LogoutRoundedIcon/> Logout
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};



const Header = () => {
  const { Image, UserName } = useSelector((state) => state.Users.LoginUser);
  const Darkmode = useSelector((state) => state.DarkMode.Enable);
  const dispatch = useDispatch();
  return (
    <AppBar position="fixed" color="textSecondary" elevation={0}  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Toolbar title='LOGO' style={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>
          <Typography variant="h4" color="textSecondary" style={{ marginTop: '16px' }}>LO</Typography>
          <Typography variant="h4" color="textSecondary" style={{ marginTop: '16px', cursor: "pointer" }}>
            <a>GO</a>
          </Typography>
        </Toolbar>
        <Box display="flex" alignItems="center" marginRight="550px" >
          <DehazeIcon style={{marginRight:"10px"}}/>
          <TextField
            // label="Search"
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: 50,
              '& .MuiOutlinedInput-root': {
                borderRadius: 50, 
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display="flex" alignItems="center" >
          <NotificationsSharpIcon style={{marginRight:"10px"}} />
          <Avatar alt="John Doe" style={{marginRight:"10px"}} src={Image ? Image : "/static/images/avatar/1.jpg"} />
          <Typography variant="body1" marginRight={'10px'}>
            {UserName}
          </Typography>
          <div onClick={() => { dispatch(SetDarkMode(!Darkmode)) }} style={{marginRight:"10px"}}>
            {Darkmode ?
              <LightModeSharpIcon />
              :
              <DarkModeSharpIcon />
            }
          </div>
        </Box>
      </Toolbar>
    </AppBar>

  );
};



export default HomePage