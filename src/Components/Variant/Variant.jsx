import React from 'react';
import classes from './Variant.module.scss';

function Variant(props) {
  const { className, onClick, buttonName } = props;
  return (
    <button type="button" className={`${className} ${classes.variant}`} onClick={onClick}>
      { buttonName }
    </button>
  );
}

export default Variant;
