import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    return (
        <div>
            <div className='service-details'>
                <div className='ps-2 mb-2'>
                    <h4 className='mt-3 '>Name:{product.name}</h4>
                    <h5>Description:{product.description}</h5>
                    <Link to='/add'><Button className=' justify-content-center ' variant="info">Add</Button>{' '}</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;