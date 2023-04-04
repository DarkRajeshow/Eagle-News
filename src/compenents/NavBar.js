
import React from "react"
import { Link } from "react-router-dom"


export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <Link className="navbar-brand"  to="/Eagle-News/"><img className="logoImg" src="/Eagle-News/Eagle.png" alt="EAGLE NEWS" /></Link>

        <button className="navbar-toggler" id="ToggleIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Eagle-News/technology">Technology</Link>
            </li>
          </ul>
        </div>
        <form></form>

        <div className="form-check form-switch" id="darkMode">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleFunc} />
          <label className={`form-check-label text-${props.mode === "light" ? "dark" : ""}`} htmlFor="flexSwitchCheckDefault"></label>
        </div>
      </nav>
    </div>

  )
}

