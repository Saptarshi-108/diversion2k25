import React from "react";

import PropTypes from "prop-types";

import "./doctor.css";

const Doctor = (props) => {
  return (
    <div className="doctor-doctor">
      <img alt={props.imageAlt} src={props.imageSrc} className="doctor-image" />
      <div className="doctor-heading">
        <h2 className="doctor-text1">{props.heading}</h2>
        <p className="doctor-text2">{props.text}</p>
      </div>
    </div>
  );
};

Doctor.propTypes = {
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
};

export default Doctor;
