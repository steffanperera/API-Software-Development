import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Sri Lanka Bureau of Foreign Employment</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> 973260081V
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
