import React from 'react';

interface HeaderProps {
  text?: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <>
      <h1 className="title is-2 is-marginless">{text}</h1>
      <hr />
    </>
  );
}
