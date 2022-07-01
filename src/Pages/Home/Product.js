import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProducts from '../../Hook/UseProducts';
import './Product.css'

const Product = (props) => {
    const { _id, name, img, description } = props.product
    const navigate = useNavigate()
    const [products, setProducts] = UseProducts()

    const handleNavigate = (id) => {
        navigate(`/update/${id}`)
    }

    const handleASingle = (id) => {
        navigate(`/singledata/${id}`)
    }

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
                    toast('Contact delete successfully')

                })

        }
    }
    return (
        <div>
            <div className='service-details mt-5'>
                <div className='ps-2 mb-2'>
                    <h4 className='mt-3'> Name:{name}</h4>
                    <p>Description: {description}</p>
                    <input type="checkbox" />
                    <div className='d-flex justify-content-around mt-3'>
                        <Button variant="outline-danger" onClick={() => handleDeleteBtn(_id)}>Delete</Button>{' '}
                        <Button onClick={() => handleNavigate(_id)} variant="outline-primary">Update</Button>{' '}
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Product;