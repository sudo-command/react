import './App.css';
import NavBar from './components/common/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Outlet, useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap";
import React,{ createContext, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Login from './screen/Login';

export interface AuthContextInterface{
  name:string;
  age:number;
}
const [user, setuser] = useState(null);
const AuthContext=createContext<AuthContextInterface|null>(null);

function App() {
  return (
    <AuthContext.Provider value={{user,setuser}}>
      <Login></Login>
    </AuthContext.Provider>
  );
}
export {AuthContext}
export default App;
