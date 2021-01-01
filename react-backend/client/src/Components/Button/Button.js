import React from 'react';

const Button = ({children, type}) => {
  return (
    <button type={type}>{children}</button>
  );
}

export default Button;