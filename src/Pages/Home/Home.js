import React, { useEffect, useState } from 'react';
import './Home.css'
import House from './House';
import Banner from './Banner';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <House></House>
        </div>
    );
};

export default Home;