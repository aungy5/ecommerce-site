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
  <h1 class="display-4">Welcome</h1>
  <img class="headshot" src="https://github.com/aungy5/ecommerce-site/raw/main/client/public/images/stadium.jpg" alt="stadium" style={imgStyle}></img>
  <p class="lead" style={pStyle}>Welcome to DogDays, we are so happy you are here! Whether you are looking to purchase a dog, need help on what food or toys to buy, or just want to look at some cute puppy pictures, we will bring it all to you!  </p>
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