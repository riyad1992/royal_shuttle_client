import React from 'react';
import Contact from '../../Contact/Contact';
import Info from '../../Info/Info';
import Reviwes from '../../Reviwes/Reviwes';
import Services from '../../Services/Services';
import Baner from '../Baner/Baner';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <Reviwes></Reviwes>
            <Contact></Contact>
        </div>
    );
};

export default Home;