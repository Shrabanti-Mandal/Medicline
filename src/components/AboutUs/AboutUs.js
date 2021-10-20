import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-details">
            <div>
            <h1 className="about-heading">You Matter, We Make It Happen</h1>
            <div className="about">
            <h5 className="about-us"> Our GPs and nurses are offering telehealth consultations through their normal work hours. If there is a need for an ‘in-person' consultation, your doctor/nurse will book one for you during your telehealth consultation.</h5>
            <br />
            <h5 className="about-us">We are continuing to offer scheduled immunisations, Covid-19 vaccinations, wound dressing and other suitable services under alert level 3 restrictions. Please phone 09 477 3700 for booking. Please wear your face mask before entering the building.</h5>
            <br />
            <h5 className="about-us">
            Please note that swab results are taking 3+ days to come back due to the high volume of testing.
            </h5>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;