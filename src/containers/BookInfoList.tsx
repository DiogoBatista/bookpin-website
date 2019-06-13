import React from 'react';
import { Book } from '../models/book.model';
import { Categories } from '../components/RightSideInfo/Categories';
import { PublishedDate } from '../components/RightSideInfo/PublishedDate';

export const BookInfoList = ({ categories, publishedDate }: any) => {
  return (
    <div className="book__details--list details-bg">
      <Categories categories={categories} />
      <PublishedDate publishedDate={publishedDate} />
    </div>
  )
}
