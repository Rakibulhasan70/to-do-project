import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const ToDoData = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-oasis-64867.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setProducts(data)
            });
    }, [products])
    return (
        <div className='container'>
            <div className="container product">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >

                    </Product>)
                }
            </div>
            <div className='d-flex justify-content-around mb-5 mt-4'>
                <Link to='/add'><button className='btn btn-info mt-4 text-center '>Add</button></Link>
            </div>
        </div>
    );
};

export default ToDoData;