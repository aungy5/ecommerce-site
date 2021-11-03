import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navigation.css'

const navStyle = {
  color: '#66ccff'
}

const activeLink = {
  fontWeight: 'bold'
}

const barStyle = {
  width: '100%',
  padding: '15px'
}

function Navigation(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={barStyle}>
  <a class="navbar-brand" style={navStyle} href="#">Andrew Ungvary</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <NavLink to="/about"><a class="nav-link" style={navStyle}>About Me</a></NavLink>
      <NavLink to="/portfolio"><a class="nav-link" style={navStyle}>Portfolio</a></NavLink>

      {/* <a class="nav-link" href="https://github.com/aungy5?tab=repositories">GitHub</a>
      <a class="nav-link" href="https://www.linkedin.com/in/aungy/">LinkedIn</a> */}

      <NavLink to="/resume"><a class="nav-link" style={navStyle}>Resume</a></NavLink>
      <NavLink to="/contact"><a class="nav-link" style={navStyle}>Contact</a></NavLink>

    </div>
  </div>
</nav>
  );
}

export default Navigation;

// function Navigation(props) {
//     return (
//         <ul>
//             <li>
//                 <NavLink to="/about"><a class="nav-link" style={navStyle}>About</a></NavLink>
//                 <NavLink to="/about"><a class="nav-link" style={navStyle}>About</a></NavLink>
//                 <NavLink to="/about"><a class="nav-link" style={navStyle}>About</a></NavLink>
//                 <NavLink to="/about"><a class="nav-link" style={navStyle}>About</a></NavLink>
//             </li>
//         </ul>
//     );
// }

// export default Navigation;