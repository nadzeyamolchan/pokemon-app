import { makeStyles } from "@material-ui/core";

const headerStyle = makeStyles((theme) =>({
        headerWrapper: () => ({
            height: theme.spacing(20),

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            margin: theme.spacing(0, 'auto', 10),
            padding: theme.spacing(0, 5),

            backgroundColor: theme.palette.background.default
        }),

        navigationLink: () => ({
            padding: '1rem',

            color: theme.palette.grey,
            textDecoration: 'none',
            fontFamily: theme.typography.body2.fontFamily,

            '&:hover': {
                transform: 'scale(1.02)'
            },

            '&:active': {
                color: theme.palette.primary.main
            },

            '&:first-child': {
                padding: '1rem 1rem 1rem 0'
            },

            '&:last-child': {
                padding: '1rem 0 1rem 1rem'
            }
        })
    })
)

export default headerStyle;