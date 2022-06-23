import React from 'react';
import classes from './BaseInput.module.scss';
import BaseButton from '../button/BaseButton';

const BaseInput = React.forwardRef((props, ref) => (
  <div className={`${props.className} ${classes.inputContainer}`}>
    <div className={classes.inputWrapper}>
      <input
        ref={ref}
        className={classes.input}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
      <BaseButton className={classes.inputInnerButton} buttonName="Confirm" onClick={props.onClick} />
    </div>
  </div>
));

export default BaseInput;
