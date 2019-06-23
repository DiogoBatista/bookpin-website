import React, { useEffect, useState } from 'react';
import { BookDetails } from "./BookDetails/BookDetails";
import { BookInfoList } from "./BookInfoList";
import { Book } from '../models/book.model';
import axios from 'axios';
import { PageView, initGA } from '../helpers/tracking';

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
    initGA();
    PageView();

    var url = "https://us-central1-bookpin.cloudfunctions.net/getBook"
    const book = 'meditations'

    var options = {
      url,
      data: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    };

    axios.post(url, { book }, options)
      .then((response) => {

        setBook(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      })
      .catch(function (error) {
        console.log(error);
        // TODO: handle errors in layout
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
