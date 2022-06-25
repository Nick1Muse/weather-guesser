import React, { useMemo, useState } from 'react';
import axios from 'axios';
import BaseTitle from '../../UI/BaseTitle/BaseTitle';
import classes from './Main.module.scss';
import VariantsList from '../../Components/VariantsList/VariantsList';
import BaseInput from '../../UI/input/BaseInput';
import ResultsList from '../../Components/ResultsList/ResultsList';
import Result from '../../Components/Result/Result';

const citiesMockData = [
  {
    id: 1,
    name: 'Kyiv',
    isActive: false,
    coords: { lat: 50.450001, lng: 30.523333 },
  },
  {
    id: 2,
    name: 'Kharkiv',
    isActive: false,
    coords: { lat: 49.988358, lng: 36.232845 },
  },
  {
    id: 3,
    name: 'Warsaw',
    isActive: false,
    coords: { lat: 52.237049, lng: 21.017532 },
  },
  {
    id: 4,
    name: 'Tel Aviv',
    isActive: false,
    coords: { lat: 32.109333, lng: 34.855499 },
  },
  {
    id: 5,
    name: 'Vilnius',
    isActive: false,
    coords: { lat: 54.687157, lng: 25.279652 },
  },
];

function Main() {
  const [cities, setCities] = useState(citiesMockData);

  const [results, setResults] = useState([]);

  const [validationStatus, setValidationStatus] = useState({
    isTouched: false,
    isValid: false,
  });

  const [answerValue, setAnswerValue] = useState('');

  const [isFinished, setIsFinished] = useState(false);

  const correctAnswersCount = useMemo(() => results.filter((item) => item.isCorrect).length, [results]);

  const activeCityName = useMemo(() => cities.find((item) => item.isActive)?.name, [cities]);
  function getDifference(a, b) {
    if (a > b) {
      return a - b;
    }

    return b - a;
  }

  function restart() {
    setCities(citiesMockData);
    setResults([]);
    setIsFinished(false);
  }

  function setActiveCity(city, index) {
    setAnswerValue('');
    const newCities = [...cities];
    newCities.forEach((cityItem) => {
      cityItem.isActive = false;
    });
    newCities[index] = { ...city, isActive: true };

    setCities(newCities);
  }

  function getInputValue(value) {
    setValidationStatus({ isTouched: true, isValid: +value <= 50 && +value >= -50 });
    setAnswerValue(value);
  }

  async function submitAnswer() {
    const selectedCity = cities.find((city) => city.isActive);
    if (selectedCity) {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.coords.lat}&lon=${selectedCity.coords.lng}&units=metric&appid=c16f9b8715bc197deccac7a29d4be50b`);
      const temp = Math.round(data.main.temp);
      setResults([...results, {
        name: selectedCity.name,
        isCorrect: getDifference(temp, answerValue) <= 5 && !(getDifference(temp, answerValue) < 0),
        rightAnswer: temp,
        userAnswer: answerValue,
      }]);

      if (results.length === 4) {
        setIsFinished(true);
      }
    }

    setActiveCity(null);
  }

  return (
    <div className={classes.main}>
      <div className={classes.contentWrapper}>
        { !isFinished ? (
          <div>
            <BaseTitle className={classes.mainTitle} titleLabel="Guess the temperature in Celsius in the city" />
            <VariantsList cities={cities} onClick={(city, index) => setActiveCity(city, index)} resultsList={results} />
            { activeCityName ? (
              <BaseInput
                className={classes.degreeInput}
                type="number"
                placeholder="Temperature in Celsius"
                maxLength="2"
                value={answerValue}
                validationStatus={validationStatus}
                onChange={(e) => getInputValue(e.target.value.slice(0, 2))}
                onKeyDown={(event) => {
                  if (event.keyCode === 69 || event.ctrlKey) {
                    event.preventDefault();
                  }
                }}
                onClick={() => submitAnswer()}
              />
            )
              : null}
            {
                        results.length ? <ResultsList resultsList={results} /> : null
                    }
          </div>
        ) : (
          <div>
            <Result correctAnswersCount={correctAnswersCount} results={results} onClick={() => restart()} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
