import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = () => {
  const [email, setEmail] = useState('celalkucukbulut@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [errorMsg, setErrorMsg] = useState('');

  function validateForm() {
    return email && password;
  }

  function handleSubmit(event) {
    event.preventDefault();
    startLogin(email, password);
    setErrorMsg('Error. Check your inputs');
    
  }
  return (
    <div className= "login">
      <div className="login__box">
        <form onSubmit={handleSubmit}>
        {errorMsg && <div><p className="form__error">{errorMsg}</p></div>}
        <div><input
            placeholder="Email"
            className="text-input"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /></div>
          <div><input
            placeholder="Password"
            className="text-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /></div>
          <div><button className="button" type="submit" disabled={!validateForm()}>
            Login
          </button></div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(Login);
