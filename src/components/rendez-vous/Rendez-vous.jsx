import React, { useState } from "react";
import { usePostPatientMutation } from "../../app/ApiSlice";
import "./Reservation.css";

function Reservation() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [reservations, setReservations] = useState([]);

  const postPatientMutation = usePostPatientMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReservation = {
      name,
      date,
      heure,
    };

    try {
      const response = await postPatientMutation.mutate(newReservation);
      console.log("Réservation ajoutée :", response);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la réservation :", error);
    }

    setReservations([...reservations, newReservation]);

    setName("");
    setDate("");
    setHeure("");
  };
  return (
    <div>
      <h2 style={{ color: "#fffff", textAlign: "center", fontSize: "50px" }}>
        prenez rendez-vous chez nous{" "}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Date :
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Heure :
          <input
            type="time"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
          />
        </label>
        <button className="Button blue" type="submit">
          Réserver
        </button>
      </form>
    </div>
  );
}

export default Reservation;
