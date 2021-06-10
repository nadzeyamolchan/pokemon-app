import React from "react";
import {Container, StylesProvider} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './footer.style.css'


export default function Footer() {
    return (
        <StylesProvider injectFirst>
        <Container className="footer-wrapper">
            <div>Copyright &copy; 2021. All Right Reserved </div>
            <ul>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><YouTubeIcon/></li>
            </ul>
        </Container>
        </StylesProvider>
    )
}