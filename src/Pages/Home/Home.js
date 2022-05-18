import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            });
    }, [products])
    return (
        <div>
            <h2 style={{ color: 'purple' }} className='text-center my-5'>My To-Do Project</h2>


            <div className="container product">
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

export default Home;