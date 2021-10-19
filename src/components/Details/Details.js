import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { Id } = useParams();

  const [doctorDetails, setDoctorDetails] = useState([]);
  const [singleDetails, setSingleDetails] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDoctorDetails(data));
  }, []);

  useEffect(() => {
    const found = doctorDetails?.find((detail) => detail.Id == Id);
    setSingleDetails(found);
  }, [doctorDetails]);
  console.log(singleDetails);
  return (
    <div>
       {/* <h1>details:{Id}</h1> */}
      {/* <p>{singleDetails.description}</p> */}
     
     <div className="d-flex justify-content-center bg-light docDetails">
     <div className="w-50 text-center ">
        <h3 className="text-success"> Doctor Name : {singleDetails?.DoctorName}</h3>
        <h5 className="text-primary"> Fee : {singleDetails?.fee}</h5>
        <h5>{singleDetails?.description}</h5>
      </div>
     </div>
    </div>
  );
};

export default Details;
