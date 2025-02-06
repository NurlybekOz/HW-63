import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <Box sx={{flexGrow: 1, mb: 5}}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    color='inherit'
                    component={NavLink}
                    to='/'
                    sx={{ flexGrow: 1, textDecoration: 'none' }}
                >
                     My blog
                </Typography>
                <Button color='inherit' component={NavLink} to='/'>Home</Button>
                <Button color='inherit' component={NavLink} to='/posts/new-post'>New Post</Button>
                <Button color='inherit' component={NavLink} to='/posts/about'>About</Button>
                <Button color='inherit' component={NavLink} to='/posts/contacts'>Contacts</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default NavBar;