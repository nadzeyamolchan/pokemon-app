import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e5b441'
        },
        secondary: {
            main: '#5f4025'
        },
        warning: {
            main: '#ab6a84'
        },
        background: {
            default: '#dcd7c9'
        }
    },
    typography : {
        allVariants: {
            fontFamily: ['Poppins', 'sans-serif'].join(',')
        },
        body2: {
            fontSize: "1rem"
        },
        h1: {
            fontSize: "3rem",
            fontWeight: 500
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 400
        }
    },
    
});