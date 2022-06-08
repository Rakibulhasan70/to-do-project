import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProfile from '../../Hook/UseProfile';


const Update = () => {
    const { id } = useParams()
    let [update] = UseProfile(id)
    console.log(update);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const img = e.target.img.value
        const name = e.target.name.value
        const description = e.target.description.value;

        const info = {
            img,
            name,
            description
        }
        console.log(info);


        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Update Done')
                navigate('/home')
            })
    }

    return (
        <div onSubmit={handleSubmit} className='w-25 mx-auto'>
            <div>
                <h2 className='text-center mt-4 mb-4'>Update Contact </h2>
                <h6>id: {id}</h6>
                <p>Name:{update?.name}</p>
                <form>
                    <input className='mt-3 p-2 mx-auto w-100' type="photo URL" name="img" placeholder='Image URL' />
                    <br />
                    <input type="text" placeholder="Name" name='name' className=" mt-3 p-2 mx-auto w-100" />
                    <br />
                    <input className=' mt-3 p-2 mx-auto w-100' type="text " name="description" placeholder='Description ' />
                    <br />
                    {/* <p>name:{update.name}</p> */}
                    <input type="submit" value="Update" className=' mt-3 btn btn-success p-2 mx-auto w-100' />
                </form>

            </div>

        </div>
    );
};

export default Update;