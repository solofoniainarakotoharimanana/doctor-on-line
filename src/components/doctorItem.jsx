import React, { useState } from "react";
import "../assets/css/doctor.css";
import profileImg from "../assets/images/doctors/cedric.jpg";

import { SpecialityAPI } from "../api/specialityAPI";
import { useEffect } from "react";

const DoctorItem = ({ doctor }) => {
  const [specialityText, setSpecialityText] = useState("");
  async function getSpecilities() {
    const specialitiesData = await SpecialityAPI.fetchAll();
    const specialities = specialitiesData.specialities;
    //const lastSpeciality = specialities.slice(-1)[0];
    let specText = "";
    for (const speciality of specialities) {
      if (doctor.specilaities.includes(speciality.id)) {
        if (specText === "") {
          specText = speciality.name;
        } else {
          specText += " - " + speciality.name;
        }
      }
      setSpecialityText(specText);
    }
  }
  useEffect(() => {
    getSpecilities();
  }, []);
  return (
    <div className="row doctor">
      <div className="col-md-9 ps-4 py-3">
        <div className="row ">
          <div className="col-md-2 doctor-profile">
            <img
              className="doctor-profile-image"
              height={"120px"}
              src={profileImg}
              alt={doctor.firstname}
            />
          </div>
          <div className="col-md-7">
            <h6 className="doctor-name text-success">
              DR. {doctor.firstname} {doctor.lastname}
            </h6>
            <p className="doctor-speciality text-muted">{specialityText}</p>
            <p className="doctor-address text-muted">
              {doctor.address.road},
              <br />
              {doctor.address.address}
            </p>
          </div>
          <div className="col-md-3 bordure">dd</div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default DoctorItem;
