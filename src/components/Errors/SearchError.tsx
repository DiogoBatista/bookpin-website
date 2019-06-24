import React from 'react';

interface SearchErrorProps {
  message: string;
}

export const SearchError = ({ message }: SearchErrorProps) => {
  return (
    <div>
      <p>{message}</p>
      <p>
        Let us know what happened,{" "}
        <a
          href="https://chrome.google.com/webstore/detail/bookpin/lbcofglckdbgdokkdkmdgccpfjalmdol/support"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          send us a message
                </a>
      </p>
    </div>
  )
}
