import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#66ccff",
};

const titleStyle = {
  backgroundColor: "#66ccff",
  padding: "20px",
};

const dogStyle = {
  padding: "20px",
  backgroundColor: 'black',
  justifyContent: 'Center'
};

const imgStyle = {
  height: "300px",
  width: "500px",
};

const dogList = ({ dogs }) => {
  if (!dogs.length) {
    return <h3>No dogs Yet</h3>;
  }


    return (
      <section className="dogs">

        <h1 style={titleStyle}>Our Dogs</h1>
        {dogs.map((dog) => (
          <div className="row" style={dogStyle}>
          <div className="col-sm-8">
            <div class="card text-center">
              <div class="card-header">{dog.type}</div>
              <div class="card-body">
                <h5 class="card-title">{dog.name}</h5>
                <img src={dog.image} style={imgStyle}></img>
                <p class="card-text">
                  {dog.description}
                  
                </p>
                <a href={dog.akcLink} class="btn btn-dark">
                  Learn More About This Breed
                </a>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
        ))}
      </section>
    )
};

export default dogList;
