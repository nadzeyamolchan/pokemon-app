import React from "react";
import {Container, StylesProvider} from "@material-ui/core";
import './footer.style.css'


export default function Footer() {
    return (
        <StylesProvider injectFirst>
        <Container className="footer-wrapper">
            <div>Copyright &copy; 2021</div>
        </Container>
        </StylesProvider>
    )
}