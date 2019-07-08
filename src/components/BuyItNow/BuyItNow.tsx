import React from 'react';
import { GooglePlayButton } from '../GooglePlayButton/GooglePlayButton';
import { BookDepositoryButton } from '../BookDepositoryButton/BookDepositoryButton';
import './_buy-it-now.scss';

const BookPrice = ({ amount, currency }: any) => (
  <p className="buy-it-now-price">
    {`${amount} ${currency} `}
  </p>
)

const BookAvailability = ({ availability }: any) => (
  <p className="buy-it-now-availability">
    {availability}
  </p>
)

export const BuyItNow = ({ book, bookDepository }: any) => {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <GooglePlayButton bookName={book.title} bookId={book.id} />
        {
          book.price && (
            <BookPrice {...book.price} />
          )
        }
      </div>
      <div className="column has-text-centered">
        <BookDepositoryButton {...bookDepository} />
        {
          bookDepository.price && (
            <BookPrice {...bookDepository.price} />
          )
        }
        {
          bookDepository.availability && (
            <BookAvailability availability={bookDepository.availability} />
          )
        }
      </div>
    </div>
  )
}
