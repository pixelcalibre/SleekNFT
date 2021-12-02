import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from 'react-moralis';

const appId='vgXE9w1xjKC0ySGaujFZrBBhgXRBYCPZUZiJ4XeI';
const serverUrl='https://obdg0bq48m4m.usemoralis.com:2053/server';



ReactDOM.render(
  <React.StrictMode>
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


