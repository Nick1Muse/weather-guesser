import React from 'react';
import classes from './BaseButton.module.scss';

function BaseButton(props) {
  const {
    className,
    onClick,
    buttonName,
    isDisabled,
  } = props;
  return (
    <button
      type="button"
      className={`${className} ${classes.button}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      { buttonName }
    </button>
  );
}

export default BaseButton;
