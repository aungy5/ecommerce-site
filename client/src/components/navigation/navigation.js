import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navigation.css'
import Auth from '../../utils/auth'

const navStyle = {
  color: '#66ccff'
}

const imgStyle = {
  height: '40px',
  width: '40px'
}

const activeLink = {
  fontWeight: 'bold'
}

const barStyle = {
  width: '100%',
  padding: '15px'
}

function Navigation(props) {

  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={barStyle}>
        <a class="navbar-brand" style={navStyle} href="#"> <img src="https://github.com/aungy5/ecommerce-site/raw/main/client/public/images/whitepaw.png" style={imgStyle}></img> DogDays </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <NavLink to="/about" style={navStyle} className="nav-link">Welcome</NavLink>
            <NavLink to="/dogs" style={navStyle} className="nav-link">Dogs</NavLink>
            <NavLink to="/posts" style={navStyle} className="nav-link">Posts</NavLink>
            <NavLink to="/contact" style={navStyle} className="nav-link">Contact</NavLink>
            <a href="/" onClick={() => Auth.logout()} style={navStyle}>
              Logout
            </a>
      
          </div>
        </div>
      </nav>
        );
    }

    else {

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={barStyle}>
  <a className="navbar-brand" style={navStyle} href="#"> <img src="https://github.com/aungy5/ecommerce-site/raw/main/client/public/images/whitepaw.png" style={imgStyle}></img> DogDays </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <NavLink to="/about" style={navStyle} className="nav-link">Welcome</NavLink>
      <NavLink to="/dogs" style={navStyle} className="nav-link">Dogs</NavLink>
      <NavLink to="/posts" style={navStyle} className="nav-link">Posts</NavLink>
      <NavLink to="/contact" style={navStyle} className="nav-link">Contact</NavLink>
      <NavLink to="/login" style={navStyle} className="nav-link">Login</NavLink>
      <NavLink to="/signup" style={navStyle} className="nav-link">Signup</NavLink>

    </div>
  </div>
</nav>
  );
  }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={barStyle}>
    {/* <a class="navbar-brand" style={navStyle} href="#"> <img src="https://github.com/aungy5/ecommerce-site/raw/main/client/public/images/whitepaw.png" style={imgStyle}></img> DogDays </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
      <div className="navbar-nav">
      {showNav()}
      </div>
    {/* </div> */}
  </nav>
    );

}

export default Navigation;