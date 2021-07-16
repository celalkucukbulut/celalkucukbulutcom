import React from 'react';
import photo from '../Images/profilPhoto.jpg';

const Profil = () => (
  <div className="profilPage">
    <p>Celal Küçükbulut</p>
    <p>Software Developer</p>

    <img src={photo} alt={photo} className="img" />
    <p>Birthday : 26.09.1993</p>
    <p>Location : Kastamonu</p>
    <p>Email : celalkucukbulut@gmail.com</p>
  </div>
);

export default (Profil);
