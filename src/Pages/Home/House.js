import React, { useEffect, useState } from 'react';
import './House.css'
import Product from './Product';
import { Link } from 'react-router-dom';

const House = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(20)


    useEffect(() => {
        fetch(`https://morning-oasis-64867.herokuapp.com/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            });
    }, [page, size])

    useEffect(() => {
        fetch('https://morning-oasis-64867.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const count = data.count;
                const pages = Math.ceil(count / 5)
                setPageCount(pages)
            })
    }, [])

    return (
        <div className='container'>
            <h2 className='mt-5 text-center text-purple'>Book Store</h2>
            <div className='d-flex justify-content-around  mt-4'>
                <Link to='/add'><button className='btn btn-info mt-4 text-center'>Add Contact</button></Link>
            </div>
            <div className="container product mb-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>

        </div>
    );
};

export default House;