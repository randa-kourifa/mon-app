import React, { useState } from "react";
import { useGetPatientQuery } from "../../app/ApiSlice";

function ReservationList() {
  const [showPatients, setShowPatients] = useState(false);
  const { data: patientsData, isLoading, isError } = useGetPatientQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching patient data.</div>;
  }

  const handleShowPatients = () => {
    setShowPatients(true);
  };

  return (
    <div style={{ marginTop: 50 }}>
      <h2>Liste des réservations :</h2>
      {/* Votre code pour afficher les réservations ici */}
      <button onClick={handleShowPatients}>Afficher les patients</button>
      {showPatients && (
        <div>
          <h2>Liste des patients :</h2>
          <ul>
            {patientsData.map((patient, index) => (
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
