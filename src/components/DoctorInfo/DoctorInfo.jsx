import React from "react";
import "./DoctorInfo.css";

const DoctorInfo = () => {
  return (
    <div className="doctor-info">
      <div className="profile">
        <h2 className="name">Dr. John Doe</h2>
        <p className="specialty">Chirurgien Plastique</p>
      </div>
      <div className="contact-info">
        <p className="info-item">
          <span className="info-label">Address:</span> 123 Main Street, City,
          Country
        </p>
        <p className="info-item">
          <span className="info-label">Phone:</span> +1 123 456 7890
        </p>
        <p className="info-item">
          <span className="info-label">Email:</span> doctor@example.com
        </p>
      </div>
    </div>
  );
};

export default DoctorInfo;
