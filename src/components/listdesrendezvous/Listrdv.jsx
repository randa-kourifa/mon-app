import React, { useState } from "react";

function ReservationList({ reservations }) {
  // État local pour stocker la liste des patients
  const [patientList, setPatientList] = useState([]);

  // Fonction pour mettre à jour la liste des patients lorsqu'on appuie sur le bouton
  const handleShowPatients = () => {
    setPatientList(reservations);
  };

  if (!Array.isArray(reservations) || reservations.length === 0) {
    return (
      <div style={{ marginTop: 50 }}>
        <h2>Liste des réservations :</h2>
        <div>No reservations found.</div>
        <button onClick={handleShowPatients}>Afficher les patients</button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 50 }}>
      <h2>Liste des réservations :</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            Nom : {reservation.name}, Date : {reservation.date}, Heure :{" "}
            {reservation.time}
          </li>
        ))}
      </ul>
      <button onClick={handleShowPatients}>Afficher les patients</button>
      {patientList.length > 0 && (
        <div>
          <h2>Liste des patients :</h2>
          <ul>
            {patientList.map((patient, index) => (
              <li key={index}>
                Nom : {patient.name}, Age : {patient.age}, Sexe : {patient.sexe}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ReservationList;
