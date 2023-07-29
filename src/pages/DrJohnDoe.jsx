import React, { useState } from "react";
import DoctorInfo from "../components/DoctorInfo/DoctorInfo";
import ReservationList from "../components/listdesrendezvous/Listrdv";
import NavBarDr from "../components/navbarDr/NavBarDr";
import "./PrivateInterface.css";

const DrJohnDoe = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [reservations, setReservations] = useState([]);
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCancelAppointment = (appointmentId) => {
    // Effectuez les actions nécessaires pour annuler le rendez-vous dans la base de données
    // Mettez à jour la liste des rendez-vous
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    setAppointments(updatedAppointments);
  };

  const handleEditAppointment = (appointmentId) => {
    // Effectuez les actions nécessaires pour modifier le rendez-vous dans la base de données
    // Redirigez vers la page de modification du rendez-vous
  };

  return (
    <div className="dr-john-doe">
      <NavBarDr />
      <div className="content">
        <DoctorInfo />
      </div>
      <ReservationList reservations={reservations} />
    </div>
  );
};

export default DrJohnDoe;
