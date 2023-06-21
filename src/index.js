import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import {theme} from "./theme";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Strictmode is an extra tool to highlight any problems that could occur in what is being wrapped below
  <React.StrictMode>
    {/* Theme provided below is what will be passed an theme attribute created from theme.js */}
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
