import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { BookPage } from './containers/BookPage';
import { NotFoundPage } from './containers/NotFoundPage';
import { Logo } from './components/Shared/Logo';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <section className="section">
            <div className="container">
              <div className="has-text-centered">
                <Logo />
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
