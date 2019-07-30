import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useReactRouter from 'use-react-router';
import { BookDetailsWrapper } from "./BookDetails/BookDetailsWrapper";
import { BookInfoList } from "./BookInfoList";
import { Book, BookDepository } from '../models/book.model';
import { PageView, initGA } from '../helpers/tracking';
import { GOOGLE_CLOUD_URL_GOOGLE, GOOGLE_CLOUD_URL_BOOK_DEPOSITORY } from '../helpers/constants';
import { SearchError } from '../components/Errors/SearchError';
import { Loading } from '../components/Shared/Loading/Loading';
import { Description } from '../components/Shared/Description/Description';
import { BuyItNow } from '../components/BuyItNow/BuyItNow';
import { Header } from '../components/Shared/Header';

import { BookImage } from './BookDetails/BookImage';

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
interface BookParams {
  title: string;
  authors: [];

}

export const BookPage = () => {
  const [book, setBook] = useState<Book>(initialState);
  const [bookDepository, setBookDepository] = useState<BookDepository>(initialState);
  const [{ hasError, errorMessage }, setError] = useState(errorInitialState);
  const [isLoading, setIsLoading] = useState(true);
  const { match } = useReactRouter();


  const fetchBookInfo = (book: BookParams) => {
    var options = {
      data: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    };

    axios.post(GOOGLE_CLOUD_URL_GOOGLE, { book }, options)
      .then((response) => {
        setBook(response.data);
        fetchBookDepositoryInfo(response.data.title)
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

  const fetchBookDepositoryInfo = (name: string) => {

    var options = {
      data: JSON.stringify(name),
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    };

    axios.post(GOOGLE_CLOUD_URL_BOOK_DEPOSITORY, { book: name }, options)
      .then((response) => {
        setBookDepository(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    initGA();
    PageView();

    const bookParam: any = match.params;

    const bookTitle = bookParam.title;
    const bookAuthors = bookParam.authors;

    const book = {
      title: bookTitle,
      authors: bookAuthors
    };

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
                <BookDetailsWrapper>
                  <BookImage {...book} />
                  <div className="m-t-lg">
                    <Description description={book.description} />
                  </div>
                  <div className="m-t-md m-b-md">
                    <Header text={"Buy it now"} />
                  </div>
                  <div className="m-t-lg m-b-lg">
                    <BuyItNow book={book} bookDepository={bookDepository} />
                  </div>
                </BookDetailsWrapper>
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
