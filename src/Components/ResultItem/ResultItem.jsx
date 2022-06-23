import React from 'react';
import classes from './ResultItem.module.scss';

function ResultItem(props) {
  const { className, cityName, isCorrect } = props;
  return (
    <div className={`${classes.resultItem} ${className}`}>
      <span>{ cityName }</span>
      <b>{ isCorrect ? 'CORRECT' : 'WRONG' }</b>
    </div>
  );
}

export default ResultItem;
