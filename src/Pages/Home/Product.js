import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProducts from '../../Hook/UseProducts';
import './Product.css'

const Product = (props) => {
    const { _id, name, description, img } = props.product
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
                    toast('Data deleted')

                })

        }
    }
    return (
        <div>
            <div className='service-details mt-5'>
                <div className='ps-2 mb-2'>
                    <img width='300px' src={img} alt="" />
                    <h4 className='mt-3 '>Name:{name}</h4>
                    <h5>Description:{description}</h5>
                    <div className='d-flex justify-content-around mt-3'>
                        <Button variant="outline-danger" onClick={() => handleDeleteBtn(_id)}>Delete</Button>{' '}
                        <Link to={`/update/${_id}`}>  <Button variant="outline-primary">Update</Button>{' '}</Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Product;