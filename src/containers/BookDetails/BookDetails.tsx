import React from 'react';
import { Header } from '../../components/Shared/Header';
import { SubTitle } from '../../components/Shared/Subtitle';
import { Authors } from '../../components/Shared/Authors/Authors';
import { Description } from '../../components/Shared/Description/Description';
import { GooglePlayButton } from '../../components/GooglePlayButton/GooglePlayButton';
import { Book } from '../../models/book.model';
import './_book-details.scss';

export const BookDetails = ({ book }: Book) => {
  return (
    <div className="book__details details-bg">
      <div className="media">
        <div className="media-left">
          <figure className="image">
            <img src={book.thumbnail} alt="Placeholder image" />
          </figure>
        </div>
        <div className="media-content">
          <Header text={book.title} />
          <SubTitle text={book.subTitle} />
          <Authors authors={book.authors} />
        </div>
      </div>
      <div className="m-t-lg">
        <Description description={book.description} />
      </div>
      <div className="m-t-lg">
        <GooglePlayButton bookName={book.name} bookId={book.id} />
      </div>
    </div>
  )
}
