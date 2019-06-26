import React, { useEffect } from 'react';
import { PageView, initGA, Event } from '../helpers/tracking';

export const Homepage = () => {
  useEffect(() => {
    initGA();
    PageView();
  }, []);
  return (
    <div>
      This is going to be the homepage
      <button
        onClick={() =>
          Event({ category: 'BUTTON', action: 'click', label: "homepage" })
        } >Add to Cart</button>
    </div>
  )
}
