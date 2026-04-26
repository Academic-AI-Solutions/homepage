import React from 'react';

const Logo = ({ className = 'h-16 w-16', variant = 'dark' }) => {
  return (
    <img
      src="/logos/logo.svg"
      alt="Academic AI Solutions Logo"
      className={`${className} ${variant === 'light' ? 'brightness-0 invert' : ''}`}
    />
  );
};

export default Logo;
