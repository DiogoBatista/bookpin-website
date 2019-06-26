import React from 'react';
import { InfoWrapper } from '../Shared/InfoWrapper';

interface CategoriesProps {
  categories?: string[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
      {
        categories ? (
          <InfoWrapper headerText={"Categories"}>
            <ul>
              {categories.map((category) => (
                <li key={category}> {category} </li>
              ))}
            </ul>
          </InfoWrapper>
        ) : ''
      }
    </>
  )
}
