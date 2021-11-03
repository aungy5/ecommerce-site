import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

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
  <h1 class="display-4">About</h1>
  <img class="headshot" src="https://github.com/aungy5/ecommerce-site/raw/main/client/public/images/stadium.jpg" alt="stadium" style={imgStyle}></img>
  <p class="lead" style={pStyle}>Take your sports travel experience to the next level with SportTrips. You just tell us the event you would like to attend, and we'll do the rest! This takes the stress out of everything surrounding the event, and enables you to focus on enjoying the game.</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://docs.google.com/document/d/e/2PACX-1vS1sb1ENhpV3Qd6q3jYfIkbGUKogv02R36VyANqCtuNFK4Xtb166H1fDrKK8HkDcrjkzKQXRZaTv7UU/pub
           " style={linkStyle}>View Events</a></button>
  </p>
</div>
    )
}

export default About;