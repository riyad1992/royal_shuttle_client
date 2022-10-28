import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from "../Image/icon/opening.png"
import location from "../Image/icon/location (2).png"
import call from "../Image/icon/callme.png"

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-28">
            <InfoCard cardTitle="Opening Hours" img = {clock} bgClass="bg-gradient-to-r from-cyan-500 to-blue-500 "></InfoCard>
            <InfoCard cardTitle="Our Location" img = {location} bgClass="bg-gradient-to-r from-stone-800 to-stone-900"></InfoCard>
            <InfoCard cardTitle="Contact Us" img = {call} bgClass="bg-gradient-to-r from-cyan-500 to-blue-500 "></InfoCard>
        </div>
    );
};

export default Info;