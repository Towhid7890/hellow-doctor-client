import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import Banner from './Banner';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
        </div>
    );
};

export default Home;