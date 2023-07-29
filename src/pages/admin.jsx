import React from "react";
import MyNavbar from "../components/NavBar/NavBar";
import ReservationList from "../components/listdesrendezvous/Listrdv";

export default function Admin() {
  return (
    <div>
      <MyNavbar />
      <h1>Bienvenue, Docteur !</h1>
      <p>Vous êtes connecté à votre site de prise de rendez-vous.</p>
      <ul>
        <li>Consultez vos rendez-vous à venir</li>
        <ReservationList />
      </ul>
    </div>
  );
}
