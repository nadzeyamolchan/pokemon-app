import React from "react";
import {Container, Typography} from "@material-ui/core";
import footerStyle from "./Footer.style";

export default function Footer() {
    const classes = footerStyle();
    return (
        <Container className={classes.footerWrapper}>
            <Typography variant="body2">Copyright &copy; {new Date().getFullYear()}</Typography>
        </Container>
    )
}