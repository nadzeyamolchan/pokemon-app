import { makeStyles } from "@material-ui/core";
import { theme } from "../../theme";

const headerStyle = makeStyles({
    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20vh',
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius
    },

    navigationPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    navigationLink: {
        color: theme.palette.grey,
        textDecoration: 'none',
        fontFamily: theme.typography.body2.fontFamily,
        padding: '1rem 1.5rem',
        '&:hover' : {
            transform: 'scale(1.02)'
        },
        '&:active' : {
            color: theme.palette.primary.main
        }
    }
})

export default headerStyle;