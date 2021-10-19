import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";
const NotFound = () => {
    return (
        <div  className="d-flex justify-content-center error">
            <div>
            <h1>404</h1>
           
           <Link to ="/home"><button className="btn btn-danger">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;<h1>404</h1>