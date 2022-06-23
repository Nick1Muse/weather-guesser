import React from 'react';
import classes from './BaseInput.module.scss';
import BaseButton from '../button/BaseButton';

function BaseInput(props) {
  const {
    value,
    onChange,
    type,
    maxLength,
    onClick,
    placeholder,
    className,
  } = props;
  return (
    <div className={`${className} ${classes.inputContainer}`}>
      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        <BaseButton className={classes.inputInnerButton} buttonName="Confirm" onClick={onClick} />
      </div>
    </div>
  );
}

export default BaseInput;
