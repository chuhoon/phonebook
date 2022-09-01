import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --main-color: #B6E546;
        --main-disabled-color: #D8F494;
        --main-title-color: #000000;
        --subtitle-text: #767676;
        --disabled-text-color: #FFFFFF;
        --border-gray: #DBDBDB;
        --warning-color: #EB5757;
        --bg-color: #FFFFFF;
    }
`;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <React.Fragment>
            <GlobalStyle />
            <App />
        </React.Fragment>
    </Provider>
);
