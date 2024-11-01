import React from 'react';
import '../stylesheets/gravity-flag/gravity-flag.scss';

const GravityFlag = ({ gravity }) => {
  const colorMap = {
    'media': 'yellow',
    'grave': 'orange',
    'muy grave': 'red',
  };
  
  return <span className={`flag flag-${colorMap[gravity]}`}>{gravity}</span>;
};

export default GravityFlag;
