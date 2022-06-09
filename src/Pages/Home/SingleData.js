import React from 'react';
import { useParams } from 'react-router-dom';
import UseProfile from '../../Hook/UseProfile';

const SingleData = () => {
    const { id } = useParams()
    const [info] = UseProfile(id)
    console.log(info);
    return (
        <div className='container mx-auto w-50 my-5' >
            <h2 className='mb-5' style={{ color: 'purple' }}>Contact Details</h2>
            <img width='300px' height='200px' className='w-50 mx-auto' src={info.img} alt="" />
            <h5 className='my-3'>name: {info.name}</h5>
            <p>Description: {info.description}</p>
        </div>
    );
};

export default SingleData;