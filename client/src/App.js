import React from 'react';
import './App.css';
import Login from './views/Login';
import Registration from './views/Registration';
import {Router, Redirect, navigate} from '@reach/router';
import Main from './views/Main';
import Header from './components/Header';
import Axios from 'axios';
import Test from './views/Test';

//Handles redirect if user is not logged in
Axios.interceptors.response.use(res => res, 
  err =>{
    console.log(err.response.data);
    navigate("/login");
    return err;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/register" noThrow />
        <Registration path="/register"/>
        <Login path="/login"/>
        <Main path="/home"/>
        <Header path="/header"/>
        <Test path="/test"/>
      </Router>
    </div>
  );

}

export default App;
