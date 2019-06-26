import React from 'react';
import logo from './assets/logo_small.svg';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { BookPage } from './containers/BookPage';
import { NotFoundPage } from './containers/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <section className="section">
            <div className="container">
              <div className="has-text-centered">
                <img src={logo} alt="Bookpin Logo" />
              </div>
            </div>
          </section>
        </nav>
        <Switch>
          <Route path="/book/:id" component={BookPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
