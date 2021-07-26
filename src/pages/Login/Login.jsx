import React from "react";
import LoginContainer from "../../components/Login/Login.container";
import {AlertWindow} from "../../components/AlertWindow/AlertWindow";

const LoginPage = () => {
    return (
        <React.Fragment>
            <AlertWindow/>
            <LoginContainer/>
        </React.Fragment>
    )
}

export default LoginPage;