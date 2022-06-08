import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProfile from '../../Hook/UseProfile';


const Update = () => {
    const { id } = useParams()
    const [update] = UseProfile(id)

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

        // const newInfo = {
        //     ...info, email: email
        // }

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
            })
    }

    return (
        <div onSubmit={handleSubmit} className='w-50 mx-auto'>
            <div>
                <h2 className='text-center mt-4 mb-4'>Update Contact :{id}</h2>
                <form>
                    <input className='input input-bordered w-full max-w-xs  mt-3' type="photo URL" name="img" placeholder='Image' />
                    <br />
                    <input type="text" placeholder="Name" name='name' className=" mt-2" />
                    <br />
                    <input className='input input-bordered w-full max-w-xs  mt-3' type="text" name="description" placeholder='Description' />
                    <br />
                    <input type="submit" value="Update" className='input input-bordered w-full max-w-xs  mt-3 btn btn-success' />

                </form>

            </div>

        </div>
    );
};

export default Update;