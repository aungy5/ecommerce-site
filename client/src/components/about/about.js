import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const imgStyle = {
    padding: '20px'
}

const linkStyle = {
    color: '#66ccff'
}

function About() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">About Me</h1>
  <img class="headshot" src="https://github.com/aungy5/react-portfolio/raw/main/public/images/headshot.jpeg" alt="headshot" style={imgStyle}></img>
  <p class="lead">Dedicated Tech Professional with experience in web applications and production support. Recognized as a proactive, resourceful, and persistent problem-solver. Excellent communicator with effective client relationship-management skills. Graduate of Syracuse University with a BA in Economics. Will graduate from the University of Pennsylvania with a certificate in full stack web development in November of 2021.</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://docs.google.com/document/d/e/2PACX-1vS1sb1ENhpV3Qd6q3jYfIkbGUKogv02R36VyANqCtuNFK4Xtb166H1fDrKK8HkDcrjkzKQXRZaTv7UU/pub
           " style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default About;