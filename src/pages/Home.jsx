import React from "react";
import DoctorInfo from "../components/DoctorInfo/DoctorInfo";
import WorkSchedule from "../components/Horaires/Horaire";
import MyNavbar from "../components/NavBar/NavBar";
import Reservation from "../components/rendez-vous/Rendez-vous";
export default function Home() {
  return (
    <div>
      <MyNavbar />
      <div style={{ marginBottom: "20px" }}></div>
      <h1 style={{ color: "#202d3d", textAlign: "center", fontSize: "80px" }}>
        Cabinet du Dr John Doe
      </h1>

      <div style={{ marginBottom: "20px" }}></div>

      <DoctorInfo />

      <div style={{ marginBottom: "40px" }}></div>

      <WorkSchedule />

      <div style={{ marginBottom: "40px" }}></div>

      <Reservation />

      <div style={{ marginBottom: "20px" }}></div>
    </div>
  );
}
