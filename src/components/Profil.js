import React from 'react';
import photo from '../Images/profilPhoto.jpg';

const Profil = () => {

  return(
  <div className = "profil">
    <div className="profil__nameJob">
      <span className = "profil__name">Celal Küçükbulut</span>
      <span className = "profil__job">Software Developer</span>
    </div>
    <img src={photo} alt="profilFoto" className="img" />
    <p className="profil__info profil__listItem"><span className="profil__value">Birthday : </span>26.09.1993</p>
    <p className="profil__info profil__listItem"><span className="profil__value">Location :</span> Kastamonu</p>
    <p className="profil__info profil__listItem"><span className="profil__value">Email :</span> celalkucukbulut@gmail.com</p>
  </div>
)};

export default (Profil);
