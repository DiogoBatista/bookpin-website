import React from 'react';
import './_google-play-button.scss';
import { Event } from '../../helpers/tracking';

interface GooglePlayButtonProps {
  bookName?: string;
  bookId?: string;
}
const AFFILIATE_ID = "1011l69236";

export const GooglePlayButton = ({ bookName, bookId }: GooglePlayButtonProps) => {
  return (
    <>
      {
        (bookName && bookId) ? (
          <a onClick={() => {
            Event({ category: 'GooglePlayButton', action: 'click_to_buy', label: "book_page" })
          }} href={`https://play.google.com/store/books/details/${bookName}?id=${bookId}&PAffiliateId=${AFFILIATE_ID}`}>
            <img className="google-play-button" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
          </a>
        ) : ''
      }
    </>
  );
};
