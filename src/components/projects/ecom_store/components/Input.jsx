import React from 'react';
import './Input.css';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name,
  required = false,
  className = ''
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      className={`input ${className}`}
    />
  );
};

export default Input;

