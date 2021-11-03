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
  <p class="lead" style={pStyle}>Take your Pet Ownership experience to the next level with DogDays, a fun site where you can link up with friends to share photos, treats, fun spots, and more!</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://docs.google.com/document/d/e/2PACX-1vS1sb1ENhpV3Qd6q3jYfIkbGUKogv02R36VyANqCtuNFK4Xtb166H1fDrKK8HkDcrjkzKQXRZaTv7UU/pub
           " style={linkStyle}>View Our Dogs!</a></button>
  </p>
</div>
    )
}

export default About;