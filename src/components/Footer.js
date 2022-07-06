import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <Link to="/contactus"> Contact Us</Link>
        <h3>Copyright Felix Willem 2022 ©</h3>
      </div>
    </div>
  )
}

export default Footer