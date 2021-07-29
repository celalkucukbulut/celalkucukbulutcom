import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { firebase } from '../firebase/firebase';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


export const Header = () => {
  var isAdmin = firebase.auth().currentUser != null;

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__home">
          <IconButton color="inherit" aria-label="delete" size="medium"><HomeIcon fontSize="large"/></IconButton>
        </div>
        <div className="header__options">
          <button className="button__headerItem">RESUME</button>
          <button className="button__headerItem">CONTACT</button>
        </div>
        {isAdmin && <button className="button button--link" onClick={startLogout}>Logout</button>}
      </div>
    </header>
  );
}
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);