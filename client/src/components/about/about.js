import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const imgStyle = {
    padding: '20px',
    height: '500px',
    width: '900px'
}

const linkStyle = {
    color: '#66ccff'
}

const pStyle = {
    margin: '30px'
}

function About() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">Welcome</h1>
  <img class="headshot" src="https://github.com/aungy5/ecommerce-site/raw/main/client/public/images/running dogs.jpeg" alt="dogsRunning" style={imgStyle}></img>
  <p class="lead" style={pStyle}>Welcome to DogDays, we are so happy you are here! Whether you are looking to purchase a dog, need help with what food or toys to buy, or just want to look at some cute puppy pictures, we have a community of dog lovers eager to help you out! Please be sure to check out the Posts section to see what our users are saying about the dogs we have helped them purchase, as this information can be very helpful in your search for a furry companion! Click the button below to view our current selection of available dogs. </p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark">
      <Link to="/dogs">
      <a style={linkStyle}>View Our Dogs!</a>
      </Link>
      </button>
  </p>
</div>
    )
}

export default About;