import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import ReactLogo from './logo.svg';
import CloseNotification from './times-circle.svg';
import Home from './routed/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="alerts">
              <ul>
                <li>
                  Alerts{' '}
                  <img
                    className="icon"
                    src={CloseNotification}
                    alt="Close Notification"
                  ></img>
                </li>
              </ul>
            </div>
          </header>

          <nav className="sidebar">
            <div className="logo">
              <img src={ReactLogo} alt="logo"></img>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <main className="main-content">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>

          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
};

const About: React.FC = () => {
  return <h2>About</h2>;
};

const Settings: React.FC = () => {
  return <h2>Settings</h2>;
};

const Logout: React.FC = () => {
  return <h2>Logout</h2>;
};

const Users: React.FC = () => {
  return <h2>Users</h2>;
};
export default App;
