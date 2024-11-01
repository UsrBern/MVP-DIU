import React from 'react';
import './GravityFlag.css';

const GravityFlag = ({ gravity }) => {
  const colorMap = {
    'media': 'yellow',
    'grave': 'orange',
    'muy grave': 'red',
  };
  
  return <span className={`flag flag-${colorMap[gravity]}`}>{gravity}</span>;
};

export default GravityFlag;
