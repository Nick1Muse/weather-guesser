import React from 'react';
import classes from './BaseButton.module.scss';

function BaseButton(props) {
  const { className, onClick, buttonName } = props;
  return (
    <button type="button" className={`${className} ${classes.button}`} onClick={onClick}>{ buttonName }</button>
  );
}

export default BaseButton;
