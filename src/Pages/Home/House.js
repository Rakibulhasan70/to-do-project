import React, { useEffect, useState } from 'react';
import './House.css'
import Product from './Product';
import { Link } from 'react-router-dom';

const House = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)


    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            });
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
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
            <div className="container product">
                {
                    products.slice(0, 5).map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
            <div className='d-flex justify-content-around mb-5 mt-4'>
                <Link to='/add'><button className='btn btn-info mt-4 text-center '>Add</button></Link>
            </div>
            <div className='pagination w-50 mx-auto my-5'>
                <h5 className='px-3'>Page:</h5>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
                {/* <select onChange={e => setSize(e.target.value)}>
                    <option selected value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select> */}
            </div>
        </div>
    );
};

export default House;