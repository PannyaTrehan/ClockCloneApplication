// NavigationBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaClock, FaStopwatch } from "react-icons/fa";
import { PiHourglassSimpleBold } from "react-icons/pi";
import { IoIosAlarm } from "react-icons/io";
import "./NavigationBar.css"; // Import the CSS file for styling

const NavigationBar = () => {
  return (
    <nav className="footer-nav">
      <NavLink to="/" exact className="nav-link" activeClassName="active">
        <div className="nav-item">
          <IoIosAlarm className="nav-icon" />
          <span className="nav-text">Alarm</span>
        </div>
      </NavLink>

      <NavLink to="/WorldClock" className="nav-link" activeClassName="active">
        <div className="nav-item">
          <FaClock className="nav-icon" />
          <span className="nav-text">World Clock</span>
        </div>
      </NavLink>

      <NavLink to="/Stopwatch" className="nav-link" activeClassName="active">
        <div className="nav-item">
          <FaStopwatch className="nav-icon" />
          <span className="nav-text">Stopwatch</span>
        </div>
      </NavLink>

      <NavLink to="/Timer" className="nav-link" activeClassName="active">
        <div className="nav-item">
          <PiHourglassSimpleBold className="nav-icon" />
          <span className="nav-text">Timer</span>
        </div>
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
