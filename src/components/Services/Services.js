import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-success p-3">Our Services</h2>
      <div id="services" className="service-container row">
      {services.map((service) => (
        <Service key={service.Id} service={service}></Service>
      ))}
    </div>
    </div>
  );
};

export default Services;
