import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'https://morning-oasis-64867.herokuapp.com/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/home')
                console.log(result);
                toast('new data added')
            })

    }
    return (
        <div className='w-50 mx-auto'>
            <div>
                <h2 className='text-center mt-4 mb-4'>Add New Task</h2>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                {/* <input className='mb-3 p-2 rounded border-1' placeholder='img' {...register("img")} /> */}
                <input className='mb-3 p-2 rounded border-1' placeholder='Name' {...register("name")} />
                <input className='mb-3 p-3 rounded border-1' placeholder='Task Details ' {...register("description")} />
                <input className='mb-3 p-2 bg-info border-0 rounded' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default Add;