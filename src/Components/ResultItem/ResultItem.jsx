import React from 'react';
import classes from './ResultItem.module.scss';
import Close from '../../assets/svg/close.svg';
import Check from '../../assets/svg/check.svg';

function ResultItem(props) {
  const {
    className,
    cityName,
    isCorrect,
    rightAnswer,
    userAnswer,
  } = props;
  return (
    <div className={`${classes.resultItem} ${className}`}>
      <span className={classes.cityName}>{ cityName }</span>
      <div className={classes.answers}>
        <span className={classes.answer}>
          <img src={Check} alt="check-icon" />
          { `Correct answer: ${rightAnswer}` }
        </span>
        <span className={classes.answer}>
          <img src={isCorrect ? Check : Close} alt="close-icon" />
          { `Your answer: ${userAnswer}` }
        </span>
      </div>
      <b>{ isCorrect ? 'CORRECT' : 'WRONG' }</b>
    </div>
  );
}

export default ResultItem;
