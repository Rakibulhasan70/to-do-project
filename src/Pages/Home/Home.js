import React from 'react';
import './Home.css'
import img from '../../../src/image/istockphoto-470796518-170667a.jpg'

const Home = () => {

    return (
        <div className='container mt-5 mb-5 '>
            <h2 style={{ color: 'purple' }} className='text-center my-5'>My To-Do Project</h2>
            <img style={{ height: '400px' }} className='mx-auto d-block' src={img} alt="" />
        </div>
    );
};

export default Home;