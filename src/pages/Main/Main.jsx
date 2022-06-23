import React from 'react';
import {Link} from "react-router-dom";
import Variant from "../Components/Variant/Variant";
import BaseTitle from "../UI/BaseTitle/BaseTitle";

const Main = () => {
    return (
        <div>
            <BaseTitle titleLabel={'Guess the temperature in the city'}/>
            <Variant buttonName={'Kyiv'}/>
            <Variant buttonName={'Lviv'}/>
        </div>
    );
};

export default Main;