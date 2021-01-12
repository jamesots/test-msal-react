import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as msal from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

const msalInstance = new msal.PublicClientApplication({
    auth: {
        clientId: '0a61c279-646b-4055-a5f1-1c3da7f70f18',
        navigateToLoginRequestUrl: true,
        redirectUri: 'http://localhost:3000/',
        validateAuthority: false,
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
    },
    system: {},
});

ReactDOM.render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
