import React from 'react';

const Input = ({title, type, id, error, touched, fieldProps}) => {
  return (
    <>
      <label htmlFor={id}>
        {title}
        <input
          type={type} 
          {...fieldProps} />
      </label>
      {touched && error ? <div>{error}</div> : null}
    </>
  );
}

export default Input;
