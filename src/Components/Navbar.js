import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/system";

const NavBar  = () => {
    return (
        //Appbar component of mui that is used for basic bar navigation stuff
        <AppBar position="static">
            {/* compnenet of mui for a responsive component, and determine the location of objects inside */}
            <Container maxWidth='xl'>
                {/* Toolbar contains components such as buttons,text, icons, and create overall responsive layouts */}
                <Toolbar>
                    {/* Typograhpy componenet is used for adding predefined styles to text*/}
                    <Typography variant="h5">
                        Bank of React
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;