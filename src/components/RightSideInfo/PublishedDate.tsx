import React from 'react';
import { InfoWrapper } from '../Shared/InfoWrapper';

interface PublishedDateProps {
  publishedDate: string;
}

export const PublishedDate = ({ publishedDate }: PublishedDateProps) => {
  return (
    <InfoWrapper headerText={"Published date"}>
      <span>
        {publishedDate}
      </span>
    </InfoWrapper>
  )
}
