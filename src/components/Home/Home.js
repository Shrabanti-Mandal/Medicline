import React from "react";

import "./Home.css";
import Services from "../Services/Services";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 home-img h-auto d-inline-block"
            src="https://image.freepik.com/free-photo/doctors-wearing-vr-simulation-with-hologram-medical-technology_53876-98566.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              Better Care and Better Understanding{" "}
              <i class="fas fa-stethoscope"></i>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-img h-auto d-inline-block"
            src="https://image.freepik.com/free-photo/elderly-woman-doctor-appointment-modern-private-clinic-while-she-sitts-hospital-bed-physician-is-listening-her-heart-beat-health-care-medicine-treatment-specialist-consultation_482257-4267.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              Creating healthy tomorrows...for one child, All Children{" "}
              <i class="fas fa-hospital-user"></i>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-img h-auto d-inline-block"
            src="https://image.freepik.com/free-photo/medical-stuff-presenting-booklet-with-arrhythmias-handicapped-senior-woman-sitting-wheelchair_482257-8508.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              The care you need. The compassion you deserve.{" "}
              <i class="fas fa-clinic-medical"></i>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Services></Services>
    </div>
  );
};

export default Home;
<h1>hgome</h1>;
