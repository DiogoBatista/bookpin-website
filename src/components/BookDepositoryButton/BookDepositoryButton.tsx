import React from 'react';
import { Event } from '../../helpers/tracking';
import './_book-depository-button.scss';
import { BookDepository } from '../../models/book.model';
import bookDepositoryImg from '../../assets/bookdepository-button.png';

export const BookDepositoryButton = ({ id, url }: BookDepository) => {
  return (
    <>
      {
        (id) ? (
          <a onClick={() => {
            Event({ category: 'buy_button', action: 'click', label: "BookDepositoryButton" })
          }} target="_blank" href={url}>
            <img className="book-depository-button" src={bookDepositoryImg} alt="Get it on Book Depository" />
          </a>
        ) : ''
      }
    </>
  );
};
