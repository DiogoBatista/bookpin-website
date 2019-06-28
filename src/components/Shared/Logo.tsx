import React from 'react';
import logo from '../../assets/logo_small.svg';
import { Event } from '../../helpers/tracking';

export const Logo = () => {
  const handleLogoClick = () => {
    Event({ category: 'Logo', action: 'click', label: "logo" })
  }
  return (
    <a href="https://bookpin.co" onClick={() => handleLogoClick()}>
      <img className="logo" src={logo} alt="Bookpin Logo" />
    </a>
  )
}
