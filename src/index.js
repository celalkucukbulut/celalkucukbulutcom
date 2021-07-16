import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import reportWebVitals from './reportWebVitals';
import AppRouter , {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

const store = configureStore();


const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};
ReactDOM.render(<Loading />, document.getElementById('root'));
renderApp();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    history.push('/dashboard');
  } else {
    store.dispatch(logout());
  }
});

reportWebVitals();
