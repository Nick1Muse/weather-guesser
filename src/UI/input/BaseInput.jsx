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
    onKeyDown,
    validationStatus,
  } = props;
  return (
    <div className={`${className} ${classes.inputContainer}`}>
      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          pattern={type === 'number' ? '/d*' : ''}
          min="-50"
          max="50"
        />
        <BaseButton
          className={classes.inputInnerButton}
          isDisabled={(!validationStatus.isValid && validationStatus.isTouched) || !value}
          buttonName="Confirm"
          onClick={onClick}
        />
      </div>
      { !validationStatus.isValid && validationStatus.isTouched
        ? <span className={classes.errorMessage}>Min temperature is -50 and Max temperature is 50</span>
        : null }
    </div>
  );
}

export default BaseInput;
