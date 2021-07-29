import React from 'react';
import photo from '../Images/profilPhoto.jpg';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const Profil = () => {

  return(
  <div className = "profil">
    <div className="profil__nameJob">
      <span className = "profil__name">Celal Küçükbulut</span>
      <span className = "profil__job">Software Developer</span>
    </div>
    <img src={photo} alt="profilFoto" className="img" />
    <div className="profil__info">
      <p><span className="profil__value">Birthday : </span>26.09.1993</p>
      <p><span className="profil__value">Location :</span> Kastamonu</p>
      <p><span className="profil__value">Email :</span> celalkucukbulut@gmail.com</p>
    </div>
    <div className = "profil__cv">
      <Button
        variant="contained"
        color="primary"
        endIcon={<GetAppIcon></GetAppIcon>}
      >Download Cv</Button>
    </div>
  </div>
)};

export default (Profil);
