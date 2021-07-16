import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { firebase } from '../firebase/firebase';



export const Header = () => {
  var isAdmin = firebase.auth().currentUser != null;

  return (
    <header className="headerPage">
      <div className="content-container">
        <div className="header__content">
          {isAdmin && <button className="button button--link" onClick={startLogout}>Logout</button>}
        </div>
      </div>
    </header>
  );
}
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);