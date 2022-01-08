import styles from './app.module.scss';
import { useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { loginUser, logoutUser, resetAuth, signupUser, forgotPassword } from '@shashikalapatel/test-redux-library-v9';

export function App() {
  const dispatch = useDispatch();
  function loginApi() {
    dispatch(loginUser("test", "test"));
  }
  function logoutApi() {
    dispatch(logoutUser());
  }
  function signupUserApi() {
    dispatch(signupUser("test", "test@gmail.com", "test"));
  }
  function resetAuthApi() {
    dispatch(resetAuth());
  }
  function forgotPasswordApi() {
    dispatch(forgotPassword("test"));
  }
  return (
    <>
    <h3>Tenant2</h3>
      <h4>Redux library Testing</h4>
      <button onClick={loginApi}>login</button>
      <button onClick={logoutApi}>logout</button>      
      <button onClick={signupUserApi}>signup user</button>
      <button onClick={resetAuthApi}>reset auth</button>
      <button onClick={forgotPasswordApi}>forgot password</button>
      <h4>Routes</h4>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;