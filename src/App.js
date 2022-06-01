import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarComp from "./components/NavbarComp"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Catering from "./components/pages/Catering";
import Introductions from "./components/pages/Introductions";
import SignIn from "./components/pages/SignIn";
import Cart from "./components/pages/Cart";
import MeetTheChef from "./components/pages/MeetTheChef";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
    <Router>
      <NavbarComp />
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/menu" element= {<Menu/>} />
      <Route path="/catering" element= {<Catering/>} />
      <Route path="/introductions" element= {<Introductions/>} />
      <Route path="/signin" element= {<SignIn/>} />
      <Route path="/cart" element= {<Cart/>} />
      <Route path="/meetthechef" element= {<MeetTheChef/>} />
      <Route path="/contactus" element= {<ContactUs/>} />
    </Routes>

    </Router>
    </>
  );
}

export default App;
