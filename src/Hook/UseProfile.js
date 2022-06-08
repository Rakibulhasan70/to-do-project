import { useEffect, useState } from 'react';

const UseProfile = id => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProfile(data)
            })
    }, [id])
    return [profile, setProfile]
};

export default UseProfile;