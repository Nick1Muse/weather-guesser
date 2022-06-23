import React from 'react';
import classes from './ResultsList.module.scss';
import ResultItem from '../ResultItem/ResultItem';

function ResultsList(props) {
  const { className, resultsList } = props;
  return (
    <div className={`${className || ''} ${classes.resultsList}`}>
      { resultsList.map((result) => (
        <ResultItem
          className={`${classes.resultItem}
        ${result.isCorrect ? classes.correct : classes.wrong}`}
          cityName={result.name}
          key={Math.random()}
          isCorrect={result.isCorrect}
        />
      )) }
    </div>
  );
}

export default ResultsList;
