import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      navigate('/');
    })
    .catch((error) => alert(error));
  } 

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
    if (auth) {
      navigate('/');
    }})
    .catch(error => alert (error))
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button className="login_signInButton" type="submit" onClick={signIn}>Sign In</button>
        </form>
        <p> By Signing-in you agree to Amazon Clone's Conditions of Service Agreement. 
          For more info see our privacy Notice, our cookies Notice and gather data. </p>
        <button className="login_registerButton" onClick={register}>Create New Account</button>
      </div>
      </div>
  );
}

export default Login;
