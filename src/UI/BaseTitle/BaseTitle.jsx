import React from 'react';
import classes from './BaseTitle.module.scss';

function BaseTitle(props) {
  const { className, titleLabel } = props;
  return <h1 className={`${className} ${classes.title}`}>{ titleLabel }</h1>;
}

export default BaseTitle;
