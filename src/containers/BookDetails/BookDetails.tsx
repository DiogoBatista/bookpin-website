import React from 'react';
import { Header } from '../../components/Shared/Header';
import { SubTitle } from '../../components/Shared/Subtitle';
import { Authors } from '../../components/Shared/Authors/Authors';
import { Description } from '../../components/Shared/Description/Description';
import { GooglePlayButton } from '../../components/GooglePlayButton/GooglePlayButton';
import { Book } from '../../models/book.model';
import './_book-details.scss';

export const BookDetails = ({ thumbnail, title, subTitle, authors, description, id }: any) => {
  return (
    <div className="book__details details-bg">
      <div className="media">
        <div className="media-left">
          <figure className="image">
            <img src={thumbnail} alt={title} />
          </figure>
        </div>
        <div className="media-content">
          <Header text={title} />
          <SubTitle text={subTitle} />
          <Authors authors={authors} />
        </div>
      </div>
      <div className="m-t-lg">
        <Description description={description} />
      </div>
      <div className="m-t-lg">
        <GooglePlayButton bookName={title} bookId={id} />
      </div>
    </div>
  )
}
