import React from 'react';
import classes from './Result.module.scss';
import BaseButton from '../../UI/button/BaseButton';
import ResultsList from '../ResultsList/ResultsList';

function Result(props) {
  const { correctAnswersCount, results, onClick } = props;
  return (
    <div className={classes.result}>
      {
        correctAnswersCount >= 3
          ? <h1 className={classes.winStatus}>YOU WON!</h1>
          : <h1 className={classes.loseStatus}>YOU LOST :(</h1>
      }
      { results.length ? <ResultsList resultsList={results} /> : null }
      <BaseButton className={classes.restartButton} buttonName="Play again" onClick={onClick} />
    </div>
  );
}

export default Result;
