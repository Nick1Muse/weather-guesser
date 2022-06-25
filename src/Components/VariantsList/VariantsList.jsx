import React from 'react';
import classes from './VariantsList.module.scss';
import Variant from '../Variant/Variant';

function VariantsList(props) {
  const { cities, onClick, resultsList } = props;
  return (
    <div className={classes.variantsWrapper}>
      <div className={classes.variantsList}>
        { cities.map((city, index) => (
          <Variant
            className={`${classes.city}
           ${city.isActive ? classes.active : ''}`}
            buttonName={city.name}
            key={city.id}
            isActive={city.isActive}
            isDisabled={!!resultsList.find((item) => item.name === city.name)}
            onClick={() => onClick(city, index)}
          />
        )) }
      </div>
    </div>
  );
}

export default VariantsList;
