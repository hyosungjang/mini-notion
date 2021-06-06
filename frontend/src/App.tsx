import React, { Fragment, useState, useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// const Login = import('./pages/login/LoginCompoenet');

function App() {
  const ref = useRef();

  return (
    <Router>
    <switch>
      <h1>woowahan learning</h1>
      <a href='http://localhost:3002/auth/google'>google login</a>
    </switch>
  </Router>
    
  );
}

export default App;