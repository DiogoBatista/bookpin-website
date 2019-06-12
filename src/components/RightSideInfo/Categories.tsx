import React from 'react';
import { InfoWrapper } from '../Shared/InfoWrapper';

interface CategoriesProps {
  categories: string[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <InfoWrapper headerText={"Categories"}>
      <ul>
        {categories.map((category) => (
          <li> {category} </li>
        ))}
      </ul>
    </InfoWrapper>
  )
}
