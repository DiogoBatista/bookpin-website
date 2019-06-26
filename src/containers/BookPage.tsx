import React, { useEffect, useState } from 'react';
import { BookDetails } from "./BookDetails/BookDetails";
import { BookInfoList } from "./BookInfoList";
import { Book } from '../models/book.model';
import axios from 'axios';
import { PageView, initGA } from '../helpers/tracking';
import { GOOGLE_CLOUD_URL } from '../helpers/constants';
import useReactRouter from 'use-react-router';
import { SearchError } from '../components/Errors/SearchError';
import loader from '../assets/loader.svg';
import { Loading } from '../components/Shared/Loading/Loading';

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

const errorInitialState = {
  hasError: false,
  errorMessage: ''
}

export const BookPage = () => {
  const [book, setBook] = useState<Book>(initialState);
  const [{ hasError, errorMessage }, setError] = useState(errorInitialState);
  const [isLoading, setIsLoading] = useState(true);
  const { match } = useReactRouter();


  const fetchBookInfo = (book: { book: string }) => {
    var options = {
      data: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    };

    axios.post(GOOGLE_CLOUD_URL, { book }, options)
      .then((response) => {

        setBook(response.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      })
      .catch((error) => {
        setIsLoading(false);
        setError({
          hasError: true,
          errorMessage: error.response.data.message
        })
      });
  }

  useEffect(() => {
    initGA();
    PageView();

    const bookParam: any = match.params;
    const book = bookParam.id;

    if (book) {
      fetchBookInfo(book);
    } else {
      setError({
        hasError: true,
        errorMessage: 'No book provided, please try again'
      })
    }


  }, [match.params]);

  return (
    <>
      {
        isLoading ? (
          <section className="section">
            <div className="container has-text-centered">
              <Loading />
            </div>
          </section>
        ) : ''
      }

      {
        hasError && !isLoading ? (
          <section className="section">
            <div className="container has-text-centered">
              <SearchError message={errorMessage} />
            </div>
          </section>
        ) : ''
      }


      {(!isLoading && !hasError) ? (
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
      ) : ''}
    </>

  )
}
