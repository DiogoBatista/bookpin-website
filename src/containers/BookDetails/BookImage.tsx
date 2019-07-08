import React from 'react';
import { Header } from '../../components/Shared/Header';
import { SubTitle } from '../../components/Shared/Subtitle';
import { Authors } from '../../components/Shared/Authors/Authors';

export const BookImage = ({ thumbnail, title, subTitle, authors }: any) => (
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
)
