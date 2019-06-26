import React from 'react';
import loader from '../../../assets/loader.svg';
import './_loading.scss';

export const Loading = () => (
  <>
    <img src={loader} alt="Bookpin loader" />
    <h1 className="loading-text" style={{ color: "white" }}>We are fetching your book...</h1>
    <a className="loading-attribute" target="_blank" href="https://loading.io/spinner/double-ring">Loader provided by Loading.io</a>
  </>
)
