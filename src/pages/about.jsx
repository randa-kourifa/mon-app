import React from "react";
import Augmentationmammaire from "../assets/Augmentation mammaire.webp";
import surgeon from "../assets/DALL·E 2023-06-28 20.25.39 - plastic surgeon portrait john doe.png";
import Liftingfacial from "../assets/FaceLift___a.jpg";
import diploma from "../assets/certificate-vector-template-formal-secured-260nw-1095878714.webp";
import Liposuccion from "../assets/liposuccion.jfif";
import Rhinoplastie from "../assets/rhinoplastie.jpg";
import MyNavbar from "../components/NavBar/NavBar";
import "./SurgeonPage.css";
function SurgeonPage() {
  return (
    <div className="surgeon-page">
      <MyNavbar />
      <h1>Dr. John Doe</h1>
      <h3>Chirurgien Plastique</h3>
      <img src={surgeon} height={400} alt="Portrait du chirurgien" />
      <div className="references">
        <h2>Références et Expérience</h2>
        <ul>
          <li>Plus de 10 ans d'expérience en chirurgie plastique</li>
          <li>Membre de l'Association des Chirurgiens Plastiques</li>
          <li>Conférencier invité dans de nombreux congrès médicaux</li>
        </ul>
      </div>

      <div className="education">
        <h2>Diplômes et Formation</h2>
        <ul>
          <li>Doctorat en Chirurgie Plastique - Université XYZ</li>
          <img src={diploma} height={400} alt="Diplôme" />
          <li>Résidence en Chirurgie Plastique - Hôpital ABC</li>
          <li>Maîtrise en Médecine - Université ABC</li>
        </ul>
      </div>

      <div className="operations">
        <h2>Opérations Spécialisées</h2>
        <ul>
          <li>Rhinoplastie</li>
          <img src={Rhinoplastie} height="300px" alt="Rhinoplastie" />
          <li>Liposuccion</li>
          <img src={Liposuccion} height="300px" alt="Liposuccion" />
          <li>Augmentation mammaire</li>
          <img
            src={Augmentationmammaire}
            height="300px"
            alt="Augmentation mammaire"
          />
          <li>Lifting facial</li>
          <img src={Liftingfacial} height="300px" alt="Lifting facial" />
        </ul>
      </div>
    </div>
  );
}

export default SurgeonPage;
