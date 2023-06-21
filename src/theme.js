import {createTheme} from '@mui/material/styles';
//create theme package from the Material UI import

/*
    Is used for creating a dark them for the material ui
*/ 
//export a particular module or paremeter whenever it is activated, this is a const and will not change
//can be used with multiple functions on a component to create interactive designs
export const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});