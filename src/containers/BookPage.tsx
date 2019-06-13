import React, { useEffect, useState } from 'react';
import { BookDetails } from "./BookDetails/BookDetails";
import { BookInfoList } from "./BookInfoList";
import bookImg from '../assets/book.jpeg';
import { Book } from '../models/book.model';
// const book = {
//   id: 'tvfyz-4JILwC',
//   title: 'The Lean Startup',
//   subTitle: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
//   description: 'Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched. Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business. The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively. Inspired by lessons from lean manufacturing, it relies on “validated learning,” rapid scientific experimentation, as well as a number of counter-intuitive practices that shorten product development cycles, measure actual progress without resorting to vanity metrics, and learn what customers really want. It enables a company to shift directions with agility, altering plans inch by inch, minute by minute. Rather than wasting time creating elaborate business plans, The Lean Startup offers entrepreneurs - in companies of all sizes - a way to test their vision continuously, to adapt and adjust before it’s too late. Ries provides a scientific approach to creating and managing successful startups in a age when companies need to innovate more than ever.',
//   thumbnail: bookImg,
//   categories: ['Business'],
//   publishedDate: '2011-09-13',
//   name: "The Lean Startup",
//   authors: ["Eric Ries"],
// }

const initialState = {
  id: "",
  name: "",
  title: "",
  subTitle: "",
  description: "",
  thumbnail: "",
  categories: [],
  publishedDate: "",
  authors: []
}

export const BookPage = () => {
  const [book, setBook] = useState<Book>(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);

    var url =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      encodeURIComponent('tvfyz-4JILwC') +
      "&key=AIzaSyAmZSwmEPwQiYH2LuBZWpZwyLGQByspktg";

    fetch(url)
      .then(response => {
        const { status } = response;

        if (status === 200) {
          return response.json();
        }
        return response;
      })
      .then(data => {
        if (!data || !data.items || !data.items.length) {
          console.error("No book was found, please try again.")
        }

        const item = data.items[0];
        console.log(item);

        const book = {
          id: item.id,
          title: item.volumeInfo.title,
          subTitle: item.volumeInfo.subtitle,
          publishedDate: item.volumeInfo.publishedDate,
          thumbnail: item.volumeInfo.imageLinks.thumbnail,
          description: item.volumeInfo.description,
          authors: item.volumeInfo.authors,
          categories: item.volumeInfo.categories,
        };

        setBook(book);
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
        // sendResponse({ book: book });
      })
      .catch(() => {
        // sendResponse({
        //   error: { message: "Ups.. Something went wrong, please try again" }
        // });
      });

  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
          <section className="section">
            <div className="container">
              <div className="columns is-5">
                <div className="column is-three-fifths">
                  <BookDetails {...book} />
                </div>
                <div className="column">
                  <BookInfoList {...book} />
                </div>
              </div>
            </div>
          </section>
        )}
    </>

  )
}
