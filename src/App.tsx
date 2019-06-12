import React from 'react';
import logo from './assets/logo_small.svg';
import bookImg from './assets/book.jpeg';
import { BookDetails } from './containers/BookDetails/BookDetails';
import { BookInfoList } from './containers/BookInfoList';

const book = {
  id: 'tvfyz-4JILwC',
  title: 'The Lean Startup',
  subTitle: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
  description: 'Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched. Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business. The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively. Inspired by lessons from lean manufacturing, it relies on “validated learning,” rapid scientific experimentation, as well as a number of counter-intuitive practices that shorten product development cycles, measure actual progress without resorting to vanity metrics, and learn what customers really want. It enables a company to shift directions with agility, altering plans inch by inch, minute by minute. Rather than wasting time creating elaborate business plans, The Lean Startup offers entrepreneurs - in companies of all sizes - a way to test their vision continuously, to adapt and adjust before it’s too late. Ries provides a scientific approach to creating and managing successful startups in a age when companies need to innovate more than ever.',
  thumbnail: bookImg,
  categories: ['Business'],
  publishedDate: '2011-09-13',
  name: "The Lean Startup",
  authors: ["Eric Ries"],
}

const App = () => {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="has-text-centered">
            <img src={logo} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-5">
            <div className="column is-three-fifths">
              <BookDetails book={book} />
            </div>
            <div className="column">
              <BookInfoList book={book} />
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default App;
