import React from 'react';
import classes from './Variant.module.scss';

function Variant(props) {
  const {
    className,
    onClick,
    buttonName,
    isDisabled,
  } = props;
  return (
    <button type="button" className={`${className} ${classes.variant}`} onClick={onClick} disabled={isDisabled}>
      { buttonName }
      { isDisabled }
    </button>
  );
}

export default Variant;
