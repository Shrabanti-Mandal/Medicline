import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";


const Service = (props) => {
  const {Id, name, img, About } = props.service;

  return (
    <div className="card-group  p-3 col-lg-3 col-md-4 col-12">
      <div class="card p-2">
        <img className="service-img" src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{About}</p>
        </div>
        <div class="card-footer">
          <Link
            to={`/details/${Id}`}
          >
            <button type="button" class="btn btn-success">
              Take Apointment
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
<h1>service</h1>;
