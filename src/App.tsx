import React from 'react';
import logo from './assets/logo_small.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BookPage } from './containers/BookPage';
import { Homepage } from './containers/Homepage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <section className="section">
            <div className="container">
              <div className="has-text-centered">
                <img src={logo} />
              </div>
            </div>
          </section>
        </nav>

        <Route path="/" exact component={Homepage} />
        <Route path="/book/:id" component={BookPage} />
      </div>
    </Router>
  );
}

export default App;
