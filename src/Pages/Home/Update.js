import React from 'react';
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


        const url = `https://morning-oasis-64867.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
        <div>
            <div onSubmit={handleSubmit} className='w-25 mx-auto'>
                <div>
                    <h2 className='text-center mt-4 mb-4'>Update Contact </h2>
                    <form>
                        <input className='mt-3 p-2 mx-auto w-100' type="photo URL" required name="img" placeholder='Image URL' />
                        <br />
                        <input type="text" placeholder="Name" name='name' required className=" mt-3 p-2 mx-auto w-100" />
                        <br />
                        <input className=' mt-3 p-2 mx-auto w-100' type="text " required name="description" placeholder='Description ' />
                        <br />
                        <input type="submit" value="Update" className=' mt-3 btn btn-success p-2 mx-auto w-100' />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Update;