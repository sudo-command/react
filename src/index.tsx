import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './screen/HomePage';
import Login from './screen/Login';
import ErrorScreen from './screen/ErrorScreen';
import RequireAuth from './utils/RequireAuth';
import Test from './screen/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter basename='/'>
  <Routes>
    <Route path={'/'} element={<App/>}/>
    <Route path={'/test'} element={<Test/>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'*'} element={<ErrorScreen/>}/>
    <Route element={<RequireAuth/>}>
      <Route path={'/homePage'} element={<HomePage/>}/>
    </Route>
  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
