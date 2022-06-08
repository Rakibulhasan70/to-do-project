import React from 'react';
import { Carousel } from 'react-bootstrap';
import pub1 from '../../image/pub1.jpg'
import pub2 from '../../image/pub2.jpg'
import pub3 from '../../image/pub3.jpg'

const Banner = () => {
    return (
        <div className='mt-2'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '400px' }}
                        src={pub1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '400px' }}
                        src={pub2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '400px' }}
                        src={pub3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;