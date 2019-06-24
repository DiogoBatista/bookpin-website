import React, { useEffect } from 'react';
import { PageView, initGA, Event } from '../helpers/tracking';

export const BookSearch = () => {
  useEffect(() => {
    initGA();
    PageView();
  }, []);
  return (
    <div>
      This is going to be the book search
    </div>
  )
}
