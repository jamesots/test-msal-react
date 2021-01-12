import React from 'react';
import * as msal from '@azure/msal-browser';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { Link, Router } from '@reach/router';

const Public = () => (
    <div>
        <h1>Public page</h1>
        <Link to="/secure">Go to secure page</Link>
    </div>
);

const Secure = () => (
    <MsalAuthenticationTemplate
        interactionType={msal.InteractionType.Redirect}>
        <h1>Secure Page</h1>
        <Link to="/">Go to public page</Link>
    </MsalAuthenticationTemplate>
);


export const App = () => {
    return (
        <Router>
            <Public path="/" />
            <Secure path="/secure"/>
        </Router>
    );
};
