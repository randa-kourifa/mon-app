import * as React from "react";
import "./WorkSchedule.css";
function WorkSchedule() {
  return (
    <div className="container">
      <h3>Horaires de travail</h3>
      <ul>
        <li>Dimanche - Jeudi : 8h - 15h</li>
        <li>Vendredi : 8h - 11h et 15h - 18h</li>
        <li>Samedi : 8h - 12h</li>
      </ul>
    </div>
  );
}

export default WorkSchedule;
