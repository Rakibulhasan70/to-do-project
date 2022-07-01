import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Home/Product';

const TodoRoute = () => {
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
            <h2 className='mt-5 text-center' style={{ color: 'purple' }}>To-Do Store</h2>
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

export default TodoRoute;