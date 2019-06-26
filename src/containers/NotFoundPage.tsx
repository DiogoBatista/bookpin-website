import React, { useEffect } from 'react';
import { PageView, initGA, Event } from '../helpers/tracking';
import { SearchError } from '../components/Errors/SearchError';

export const NotFoundPage = () => {
  useEffect(() => {
    initGA();
    PageView();
  }, []);
  return (
    <section className="section">
      <div className="container has-text-centered">
        <SearchError message={"Ups... this is not the page you are looking for."} />
      </div>
    </section>
  )
}
