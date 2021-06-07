import React, { Fragment, useState, useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useCookies } from 'react-cookie';


// const Login = import('./pages/login/LoginCompoenet');

function App() {
  const ref = useRef();
  const [cookies] = useCookies(['name']);


  return (
    <Router>
      <h1>woowahan learning</h1>
      <h1>{cookies}</h1>
      <a href='http://localhost:3002/auth/google'>google login</a>
  </Router>
    
  );
}

export default App;