import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseProducts from '../../Hook/UseProducts';
import './Product.css'

const Product = (props) => {
    const { _id, name, description } = props.product
    const [products, setProducts] = UseProducts()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `https://morning-oasis-64867.herokuapp.com/product/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                })

        }
    }
    return (
        <div>
            <div className='service-details mt-5'>
                <div className='ps-2 mb-2'>
                    <h4 className='mt-3 '>Name:{name}</h4>
                    <h5>Description:{description}</h5>
                    <div className='d-flex justify-content-around mt-3'>
                        <button className='btn btn-danger' onClick={() => handleDeleteBtn(_id)}>Delete</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Product;