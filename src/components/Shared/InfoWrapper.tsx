import React from 'react';
import { Header } from './Header';

export const InfoWrapper = ({ children, headerText }: any) => (
  <div className="m-b-lg">
    <Header text={headerText} />
    {children}
  </div>
)

