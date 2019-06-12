import React from 'react';
import { Book } from '../models/book.model';
import { Categories } from '../components/RightSideInfo/Categories';
import { PublishedDate } from '../components/RightSideInfo/PublishedDate';

export const BookInfoList = ({ book }: Book) => {
  return (
    <div className="book__details--list details-bg">
      <Categories categories={book.categories} />
      <PublishedDate publishedDate={book.publishedDate} />
    </div>
  )
}
