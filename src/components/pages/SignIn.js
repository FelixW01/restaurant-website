import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../Login';
import SignUp from "../SignUp"

function SignIn() {
  return (
    <div>
      <Login />
    </div>
  )
}
export default SignIn;