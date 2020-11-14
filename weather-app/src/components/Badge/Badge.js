import React from 'react';
import './badge.scss';

export const Badge = ({ title, color, className }) => {
  return (
    <p className='badge'>
      <i className='fas fa-circle mx-10' style={{ color }}></i>
      <span className={className}>{title}</span>
    </p>
  );
};
