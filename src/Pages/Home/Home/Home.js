import React from 'react';
import Contact from '../../Contact/Contact';
import Info from '../../Info/Info';
import MakeReservation from '../../MakeReservation/MakeReservation';
import Reviwes from '../../Reviwes/Reviwes';
import Services from '../../Services/Services';
import Baner from '../Baner/Baner';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Info></Info>
            <Services></Services>
            <MakeReservation></MakeReservation>
            <Reviwes></Reviwes>
            <Contact></Contact>
        </div>
    );
};

export default Home;