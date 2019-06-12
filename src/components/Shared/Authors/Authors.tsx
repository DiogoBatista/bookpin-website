import React from "react";
import './_authors.scss';

interface AuthorsProps {
  authors: string[];
}

export const Authors = ({ authors }: AuthorsProps) => (
  <h3 className="book--authors is-5 is-italic">
    <span>by </span>
    <span>{authors.join(" & ")}</span>
  </h3>
);
